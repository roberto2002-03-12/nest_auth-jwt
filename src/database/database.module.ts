import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './connection/database.provider';

@Global()
@Module({
  providers: [...databaseProviders]
})
export class DatabaseModule {}
