import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './connection/database.provider';

@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
