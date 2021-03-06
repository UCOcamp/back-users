import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response as res } from 'express';
import RegisterUserDTO from 'src/contexts/shared/swagger/RegisterUserDTO';
import RegisterUserCommand from '../../application/useCases/RegisterUser/commands/RegisterUser.command';
import RegisterUserRequest from '../../application/useCases/RegisterUser/requests/RegisterUser.request';
import Mail from '../../domain/entities/valueobjects/Mail';
import Role from '../../domain/entities/valueobjects/Role';

@ApiTags('users')
@Controller('users')
class RegisterUserController {
  constructor(private readonly commandBus: CommandBus) {}
  @Post('/register')
  @ApiBody({
    type: RegisterUserDTO,
  })
  @ApiCreatedResponse({
    status: 201,
    description: 'User was registered',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'All params are needed',
  })
  @ApiConflictResponse({
    status: 409,
    description: 'This mail is already taken',
  })
  public async registerUser(
    @Body()
    params: {
      name: string;
      surnames: string;
      mail: string;
      passwd: string;
      role: string;
    },
    @Response() response: res,
  ) {
    const { name, surnames, mail, passwd, role } = params;

    if (!name || !surnames || !mail || !passwd || !role) {
      throw new BadRequestException(
        'Params missing (Name, Surnames, Mail, Passwd and Role needed)',
      );
    }

    try {
      Mail.fromString(mail);
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          'Mail is not valid. Make sure it is correct.',
        );
      }
    }

    try {
      new Role(role);
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(
          'Role is not valid. VALIDS: CREATOR, STUDENT',
        );
      }
    }

    const request = new RegisterUserRequest(name, surnames, mail, passwd, role);
    try {
      await this.commandBus.execute<RegisterUserCommand, void>(
        new RegisterUserCommand(request),
      );
      response
        .status(HttpStatus.CREATED)
        .send({ message: 'User was Registered Succesfully' });
    } catch (error) {
      throw new ConflictException('This mail is already taken.');
    }
  }
}

export default RegisterUserController;
