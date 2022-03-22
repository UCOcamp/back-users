import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  Param,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Nullable } from 'src/contexts/shared/domain/Nullable';
import LoginUserQuery from '../../application/useCases/loginUser/queries/loginUser.query';
import LoginUserRequest from '../../application/useCases/loginUser/request/loginUser.request';
import loginUserResponse from '../../application/useCases/loginUser/responses/loginUser.response';
import User from '../../domain/entities/User';

@ApiTags('users')
@Controller('users')
class LoginUserController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('/login/:mail/:passwd')
  @ApiBadRequestResponse({
    status: 400,
    description: 'All parameters are needed',
  })
  @ApiForbiddenResponse({
    status: 403,
    description: 'Passwd was not valid',
  })
  async loginUser(
    @Param('mail') mail: string,
    @Param('passwd') passwd: string,
  ): Promise<loginUserResponse | void> {
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

    return user.json;
  }
}

export default LoginUserController;
