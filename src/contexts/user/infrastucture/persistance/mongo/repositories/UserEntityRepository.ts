import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import BaseMongoEntityRepository from 'src/contexts/shared/data/BaseMongoEntityRepository';
import { Nullable } from 'src/contexts/shared/domain/Nullable';
import User from 'src/contexts/user/domain/entities/User';
import UserEntityRepository from 'src/contexts/user/domain/repositories/UserEntityRepository';
import UserSchema from '../schemas/User.schema';
import UserSchemaFactory from '../schemas/User.schemaFactory';

@Injectable()
class MongoUserEntityRepository
  extends BaseMongoEntityRepository<UserSchema, User>
  implements UserEntityRepository
{
  constructor(
    @InjectModel(UserSchema.name)
    userModel: Model<UserSchema>,
    userSchemaFactory: UserSchemaFactory,
  ) {
    super(userModel, userSchemaFactory);
  }
  º;

  async getOneByMail(mail: string): Promise<Nullable<User>> {
    try {
      return await this.findOne({ mail: mail });
    } catch (error) {
      return null;
    }
  }

  getAll(): Promise<User[]> {
    throw new Error('Method not implemented');
  }

  async saveOne(user: User): Promise<void> {
    await this.create(user);
  }

  updateOne(): Promise<void> {
    throw new Error('Method not implemented');
  }

  deleteOne(): Promise<void> {
    throw new Error('Method not implemented');
  }
}

export default MongoUserEntityRepository;
