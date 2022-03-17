import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './mongo.config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/dev')],
})
class DatabaseModule {}

export default DatabaseModule;
