import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import {
  UserCommandHandlers,
  UserEventHandlers,
} from '../../application/useCases/_index';
import UserFactory from '../../domain/entities/UserFactory';
import UserControllers from '../controllers/_index';
import MongoUserEntityRepository from '../persistance/mongo/repositories/UserEntityRepository';
import UserSchema from '../persistance/mongo/schemas/User.schema';
import UserSchemaFactory from '../persistance/mongo/schemas/User.schemaFactory';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: UserSchema.name,
        schema: SchemaFactory.createForClass(UserSchema),
      },
    ]),
  ],
  controllers: [...UserControllers],
  providers: [
    UserFactory,
    MongoUserEntityRepository,
    UserSchemaFactory,
    ...UserEventHandlers,
    ...UserCommandHandlers,
  ],
})
class UserModule {}
export default UserModule;
