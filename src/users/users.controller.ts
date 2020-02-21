import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './User.db';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(['user', 'name', 'password'])
  add(@Body() bodys: User) {
    return this.usersService.create(bodys)
  }

  @Put('id')
  update(){}

  @Get(':id')
  find(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }
}
