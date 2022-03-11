import { AggregateRoot } from '@nestjs/cqrs';

import Mail from './valueobjects/Mail';
import Role from './valueobjects/Role';

class User extends AggregateRoot {
  private readonly _id: string;
  private _name: string;
  private _surnames: string;
  private _mail: Mail;
  private _passwd: string;
  private _role: Role;

  constructor(
    id: string,
    name: string,
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
    return this._name;
  }

  set name(name: string) {
    this._name = name;
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
}

export default User;
