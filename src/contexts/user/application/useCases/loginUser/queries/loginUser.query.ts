import LoginUserRequest from '../request/loginUser.request';

class LoginUserQuery {
  constructor(private readonly _loginUserRequest: LoginUserRequest) {}

  get loginUserRequest() {
    return this._loginUserRequest;
  }
}

export default LoginUserQuery;
