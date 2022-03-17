import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo/dev')],
})
class DatabaseModule {}

export default DatabaseModule;
