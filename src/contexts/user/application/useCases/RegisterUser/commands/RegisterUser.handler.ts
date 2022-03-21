import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import RegisterUserCommand from './RegisterUser.command';
import UserFactory from 'src/contexts/user/domain/entities/UserFactory';
import MongoUserEntityRepository from 'src/contexts/user/infrastucture/persistance/mongo/repositories/UserEntityRepository';
import UserWasRegisteredEvent from '../events/UserWasRegistered.event';

@CommandHandler(RegisterUserCommand)
class RegisterUserHandler implements ICommandHandler<RegisterUserCommand> {
  constructor(
    private readonly userFactory: UserFactory,
    private readonly eventPublisher: EventPublisher,
    private readonly UserRepository: MongoUserEntityRepository,
  ) {}

  async execute(command: RegisterUserCommand): Promise<void> {
    const { name, surnames, mail, passwd, role } = command.registerUserRequest;
    const user = this.eventPublisher.mergeObjectContext(
      this.userFactory.create(name, surnames, mail, passwd, role),
    );

    await this.UserRepository.saveOne(user);
    user.apply(new UserWasRegisteredEvent(user.id));
    user.commit();
  }
}

export default RegisterUserHandler;
