class RegisterUserRequest {
  constructor(
    private readonly _name: string,
    private readonly _surnames: string,
    private readonly _mail: string,
    private readonly _passwd: string,
    private readonly _role: string,
  ) {}

  get name() {
    return this._name;
  }

  get surnames() {
    return this._surnames;
  }

  get mail() {
    return this._mail;
  }

  get passwd() {
    return this._passwd;
  }

  get role() {
    return this._role;
  }
}

export default RegisterUserRequest;
