import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import UserWasRegisteredEvent from './UserWasRegistered.event';

@EventsHandler(UserWasRegisteredEvent)
class UserWasRegisteredHandler
  implements IEventHandler<UserWasRegisteredEvent>
{
  async handle({ id }: UserWasRegisteredEvent): Promise<void> {
    console.log(`Uploaded video with id ${id}`);
  }
}

export default UserWasRegisteredHandler;