import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ExpensesModule } from './expenses/expenses.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@learningproject.rlhkmvb.mongodb.net'), UserModule, AuthModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
