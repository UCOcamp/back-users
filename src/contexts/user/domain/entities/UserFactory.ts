import { Injectable } from '@nestjs/common';
import User from './User';
import { v4 as uuid } from 'uuid';
import EntityFactory from '../../../shared/domain/EntityFactory';
import Role from './valueobjects/Role';
import Mail from './valueobjects/Mail';

@Injectable()
class UserFactory implements EntityFactory<User> {
  create(
    name: string,
    surnames: string,
    mail: string,
    passwd: string,
    role: string,
  ) {
    const user = new User(
      uuid(),
      name,
      surnames,
      new Mail(mail),
      passwd,
      new Role(role),
    );
    return user;
  }
}

export default UserFactory;
