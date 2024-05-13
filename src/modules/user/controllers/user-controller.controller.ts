import { 
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiKeyGuard } from '../../../guards/auth/api-key.guard';

import { UserServiceService } from '../services/user-service.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('user')
export class UserControllerController {
  constructor(private readonly userService: UserServiceService) {}

  @UseGuards(ApiKeyGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }
}
