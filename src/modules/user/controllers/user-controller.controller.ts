import { 
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { UserServiceService } from '../services/user-service.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('user')
export class UserControllerController {
  constructor(private readonly userService: UserServiceService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }
}
