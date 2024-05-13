import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './providers/user.provider';
import { UserServiceService } from './services/user-service.service';
import { UserControllerController } from './controllers/user-controller.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserControllerController],
  providers: [
    ...userProviders,
    UserServiceService,
  ],
})
export class UserModule {}
