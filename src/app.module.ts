import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserModule from './contexts/user/infrastucture/modules/Users.module';
import DatabaseModule from './core/database/mongo/mongo.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
