import UserHadLoggedInHandler from './loginUser/events/UserHadLoggedIn.handler';
import LoginUserHandler from './loginUser/queries/loginUser.handler';
import RegisterUserHandler from './RegisterUser/commands/RegisterUser.handler';
import UserWasRegisteredHandler from './RegisterUser/events/UserWasRegistered.handler';

export const UserCommandHandlers = [RegisterUserHandler];
export const UserQueryHandlers = [LoginUserHandler];
export const UserEventHandlers = [
  UserWasRegisteredHandler,
  UserHadLoggedInHandler,
];
