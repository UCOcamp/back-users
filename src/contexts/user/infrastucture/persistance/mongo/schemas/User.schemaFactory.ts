import { Injectable } from '@nestjs/common';
import EntitySchemaFactory from 'src/contexts/shared/data/EntitySchemaFactory';
import User from 'src/contexts/user/domain/entities/User';
import Mail from 'src/contexts/user/domain/entities/valueobjects/Mail';
import Name from 'src/contexts/user/domain/entities/valueobjects/Name';
import Role from 'src/contexts/user/domain/entities/valueobjects/Role';
import Surnames from 'src/contexts/user/domain/entities/valueobjects/Surnames';
import UserId from 'src/contexts/user/domain/entities/valueobjects/UserId';
import UserSchema from './User.schema';

@Injectable()
class UserSchemaFactory implements EntitySchemaFactory<UserSchema, User> {
  createEntityFromSchema(entitySchema: UserSchema): User {
    return new User(
      UserId.fromString(entitySchema.id),
      Name.fromString(entitySchema.name),
      Surnames.fromString(entitySchema.surnames),
      Mail.fromString(entitySchema.mail),
      entitySchema.passwd,
      new Role(entitySchema.role),
    );
  }
  createSchemaFromEntity(entity: User): UserSchema {
    return entity.json;
  }
}

export default UserSchemaFactory;
