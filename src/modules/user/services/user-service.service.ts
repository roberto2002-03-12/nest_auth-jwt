import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserServiceService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: CreateUserDto): Promise<User> {
    const isUserNew = await this.userRepository.count({ where: { email: user.email } });

    if (isUserNew === 1)
      throw new HttpException('This email alredy exist.', HttpStatus.BAD_REQUEST);

    const hashPassword = await bcrypt.hash(user.password, 10);
    const data: CreateUserDto = {
      ...user,
      password: hashPassword
    }
    return this.userRepository.save(data);
  }
}
