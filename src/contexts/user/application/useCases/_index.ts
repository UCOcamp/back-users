import RegisterUserHandler from './RegisterUser/commands/RegisterUser.handler';
import UserWasRegisteredHandler from './RegisterUser/events/UserWasRegisteres.handler';

export const UserCommandHandlers = [RegisterUserHandler];
export const UserEventHandlers = [UserWasRegisteredHandler];
