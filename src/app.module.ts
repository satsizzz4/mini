/* eslint-disable prettier/prettier */
// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://satishiter:KhulpwatizK85kqn@cluster0.rofgf6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Adjust the connection string
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}
