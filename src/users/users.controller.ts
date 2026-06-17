import {
  Controller, Get, Post, Body, Param, Patch, Delete,
  ParseUUIDPipe, Inject,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import type { IUsersService } from './interfaces/users-service.interface';
import type { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('IUsersService')
    private readonly usersService: IUsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const data: Partial<User> = {};
    if (updateUserDto.username !== undefined) data.username = updateUserDto.username;
    if (updateUserDto.password !== undefined) {
      const salt = await bcrypt.genSalt();
      data.passwordHash = await bcrypt.hash(updateUserDto.password, salt);
    }
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.softDelete(id);
  }
}
