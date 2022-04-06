class LoginUserRequest {
  constructor(
    private readonly _mail: string,
    private readonly _passwd: string,
  ) {}

  get mail() {
    return this._mail;
  }

  get passwd() {
    return this._passwd;
  }
}

export default LoginUserRequest;
