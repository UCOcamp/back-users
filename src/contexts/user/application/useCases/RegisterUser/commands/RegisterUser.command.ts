import RegisterUserRequest from '../requests/RegisterUser.request';

class RegisterUserCommand {
  constructor(private readonly _registerUserRequest: RegisterUserRequest) {}

  get registerUserRequest() {
    return this._registerUserRequest;
  }
}

export default RegisterUserCommand;
