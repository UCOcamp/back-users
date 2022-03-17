export enum Roles {
  Creator = 'CREATOR',
  Student = 'STUDENT',
}

class Role {
  private _value: string;
  private _roles = ['CREATOR', 'STUDENT'];

  constructor(value: string) {
    this.create(value);
  }

  get value() {
    return this._value;
  }

  private create(value: string) {
    if (this._roles.includes(value) == false) {
      throw new Error('This role is not valid.');
    }

    this._value = value;
  }
}

export default Role;
