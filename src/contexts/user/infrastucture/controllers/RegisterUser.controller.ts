import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { Response as res } from 'express';
import RegisterUserDTO from 'src/contexts/shared/swagger/RegisterUserDTO';
import RegisterUserCommand from '../../application/useCases/RegisterUser/commands/RegisterUser.command';
import RegisterUserRequest from '../../application/useCases/RegisterUser/requests/RegisterUser.request';

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

    const request = new RegisterUserRequest(name, surnames, mail, passwd, role);
    await this.commandBus.execute<RegisterUserCommand, void>(
      new RegisterUserCommand(request),
    );
    response
      .status(HttpStatus.CREATED)
      .send({ message: 'User was Registeres Succesfully' });
  }
}

export default RegisterUserController;
