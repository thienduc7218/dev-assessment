import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appEnv } from './app.env';
import { MySQLConfig } from './db/db.config';
import { databaseEnv } from './db/db.env';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appEnv, databaseEnv] }),
    TypeOrmModule.forRootAsync({ useClass: MySQLConfig }),
    TeachersModule
  ]
})
export class AppModule { }
