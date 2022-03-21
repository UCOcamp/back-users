import { AggregateRoot } from '@nestjs/cqrs';

import Mail from './valueobjects/Mail';
import Name from './valueobjects/Name';
import Role from './valueobjects/Role';
import UserId from './valueobjects/UserId';

class User extends AggregateRoot {
  private readonly _id: UserId;
  private _name: Name;
  private _surnames: string;
  private _mail: Mail;
  private _passwd: string;
  private _role: Role;

  constructor(
    id: UserId,
    name: Name,
    surnames: string,
    mail: Mail,
    passwd: string,
    role: Role,
  ) {
    super();
    this._id = id;
    this._name = name;
    this._surnames = surnames;
    this._mail = mail;
    this._passwd = passwd;
    this._role = role;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name.value;
  }

  set name(name: string) {
    this._name = Name.fromString(name);
  }

  get surnames() {
    return this._surnames;
  }

  set surnames(surnames: string) {
    this._surnames = surnames;
  }

  get mail() {
    return this._mail;
  }

  set mail(mail: Mail) {
    this._mail = mail;
  }

  get passwd() {
    return this._passwd;
  }

  set passwd(passwd: string) {
    this._passwd = passwd;
  }

  get role() {
    return this._role;
  }

  set role(role: Role) {
    this._role = role;
  }

  get json() {
    return {
      id: this.id,
      name: this.name,
      surnames: this.surnames,
      mail: this.mail.value,
      passwd: this.passwd,
      role: this.role.value,
    };
  }
}

export default User;
