import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import UserHadLoggedInEvent from './UserHadLoggedIn.event';

@EventsHandler(UserHadLoggedInEvent)
class UserHadLoggedInHandler implements IEventHandler<UserHadLoggedInEvent> {
  async handle({ id }: UserHadLoggedInEvent): Promise<void> {
    console.log(`User had logged in ${id}`);
  }
}

export default UserHadLoggedInHandler;
