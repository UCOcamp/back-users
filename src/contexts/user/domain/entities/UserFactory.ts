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
    mail: Mail,
    passwd: string,
    role: Role,
  ) {
    const user = new User(uuid(), name, surnames, mail, passwd, role);
    return user;
  }
}

export default UserFactory;
