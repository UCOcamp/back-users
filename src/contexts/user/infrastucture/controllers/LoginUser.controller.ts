import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { Response as res } from 'express';
import { QueryBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import LoginUserQuery from '../../application/useCases/loginUser/queries/loginUser.query';
import LoginUserRequest from '../../application/useCases/loginUser/request/loginUser.request';
import loginUserResponse from '../../application/useCases/loginUser/responses/loginUser.response';
import User from '../../domain/entities/User';

class LoginDTO {
  @ApiProperty({
    type: String,
    description: 'Email of the user',
  })
  mail!: string;
  @ApiProperty({
    type: String,
    description: 'Password of the user',
  })
  passwd!: string;
}
@ApiTags('users')
@Controller('users')
class LoginUserController {
  constructor(private readonly queryBus: QueryBus) {}

  @Post('/login')
  @ApiBody({
    type: LoginDTO,
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'All parameters are needed',
  })
  @ApiForbiddenResponse({
    status: 403,
    description: 'Passwd was not valid',
  })
  @ApiOkResponse({
    status: 200,
    description: 'User had logged in',
  })
  async loginUser(
    @Body() params: LoginDTO,
    @Response() response: res,
  ): Promise<loginUserResponse | void> {
    const { mail, passwd } = params;
    if (!mail || !passwd) {
      throw new BadRequestException('Params missing. (mail, passwd).');
    }

    const request = new LoginUserRequest(mail, passwd);
    let user = null;
    try {
      user = await this.queryBus.execute<LoginUserQuery, User>(
        new LoginUserQuery(request),
      );
    } catch (error) {
      throw new ForbiddenException('Password was not correct');
    }

    if (user === null) {
      throw new BadRequestException('No user found with this mail');
    }

    response.status(HttpStatus.OK).send(user.json);
  }
}

export default LoginUserController;
