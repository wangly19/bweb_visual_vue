import { Controller, HttpException, HttpStatus, Get, Post, Body, Delete, Param, Put, HttpCode, Query, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.db';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { resultRes } from '../config/result'
import { uuid } from 'src/config/createTokenUUID';
import { userList } from './user.dao';

@Controller('users')
@ApiTags('用户')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async add(@Body() bodys: User) {
    try {
      const isUser = await this.usersService.queryLoginUser(bodys.user)
      if (isUser.length === 0) {
        this.usersService.create(bodys)
        return resultRes(1, '添加成功', {
          list: await this.usersService.findAll({limit:  10, currentPage: 1})
        })
      } else {
        return resultRes<null>(-1, '用户已存在', null)
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN)
    }
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body() bodys: User) {
    try {
      await this.usersService.update(id, bodys)
      return resultRes<null>(1, '更新成功', null)
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':id') 
  async deleteUser(@Param('id') id: string) {
    try {
      await this.usersService.remove(id)
      return resultRes<null>(1, '删除成功', null)
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * 查询用户列表接口
   * @param query 查询接口参数
   */
  @ApiQuery({name: 'user', required: false})
  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'limit'})
  @ApiQuery({name: 'currentPage'})
  @Get()
  async find(@Query() query) {
    const count = await this.usersService.findUserCount()
    const list = await this.usersService.findAll(query)
    return resultRes<object>(1, '查询成功', {
      total: count,
      currentPage: query.currentPage,
      limit: query.limit,
      list
    })
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Body() loginForm: User) {
    try {
      console.log(loginForm.user)
      const user: User[] = await this.usersService.queryLoginUser(loginForm.user)
      console.log(User)
      if (user.length > 0) {
        // 当前用户存在, 那么判断密码
        return user[0].password === loginForm.password ? // 三元resultRes方法 
          resultRes<object>(1, '登录成功', {
            token: uuid(40,60)
          }) : resultRes<null>(-1, '登录失败，密码错误', null)
      }else {
        return resultRes<null>(-1, '当前用户不存在', null)
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN)
    }
  }
}
