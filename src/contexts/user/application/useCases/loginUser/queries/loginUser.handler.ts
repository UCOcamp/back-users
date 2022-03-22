import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Nullable } from 'src/contexts/shared/domain/Nullable';
import User from 'src/contexts/user/domain/entities/User';
import MongoUserEntityRepository from 'src/contexts/user/infrastucture/persistance/mongo/repositories/UserEntityRepository';
import UserHadLoggedInEvent from '../events/UserHadLoggedIn.event';
import LoginUserQuery from './loginUser.query';

@QueryHandler(LoginUserQuery)
class LoginUserHandler implements IQueryHandler<LoginUserQuery> {
  constructor(
    private readonly userRepository: MongoUserEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ loginUserRequest }: LoginUserQuery): Promise<Nullable<User>> {
    const { mail, passwd } = loginUserRequest;

    const user = this.eventPublisher.mergeObjectContext(
      await this.userRepository.getOneByMail(mail),
    );

    if (user === null) {
      return null;
    }

    if (user.passwd !== passwd) {
      throw new Error('Passwd not valid');
    }

    user.apply(new UserHadLoggedInEvent(user.id));
    user.commit();
    return user;
  }
}

export default LoginUserHandler;
