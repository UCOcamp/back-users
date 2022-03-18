import { Injectable } from '@nestjs/common';
import EntitySchemaFactory from 'src/contexts/shared/data/EntitySchemaFactory';
import User from 'src/contexts/user/domain/entities/User';
import Mail from 'src/contexts/user/domain/entities/valueobjects/Mail';
import Role from 'src/contexts/user/domain/entities/valueobjects/Role';
import UserSchema from './User.schema';

@Injectable()
class UserSchemaFactory implements EntitySchemaFactory<UserSchema, User> {
  createEntityFromSchema(entitySchema: UserSchema): User {
    return new User(
      entitySchema.id,
      entitySchema.name,
      entitySchema.surnames,
      new Mail(entitySchema.mail),
      entitySchema.passwd,
      new Role(entitySchema.role),
    );
  }
  createSchemaFromEntity(entity: User): UserSchema {
    return entity.json;
  }
}

export default UserSchemaFactory;
