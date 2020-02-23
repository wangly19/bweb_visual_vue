import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.db'
interface IFindAllParams {
  limit: number,
  currentPage: number
  user?: string
  name?: string
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  // 查询帐号分页展示
  async findAll({limit, currentPage, user, name}: IFindAllParams): Promise<User[]> {
    console.log(limit, currentPage, user, name)
    return this.usersRepository.find({
      order: {
        id: 'ASC'
      },
      select: ['id', 'user', 'name'],
      where: {
        user: user ? user : false,
        name: name ? name : false
      },
      skip: (currentPage - 1) * limit,
      take: limit
    });
  }

  async findUserCount(): Promise<any>{
    return this.usersRepository.count()
  }

  // 删除帐号
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  // 创建帐号
  async create(params: User): Promise<void> {
    await this.usersRepository.save(params)
  }

  // 更新帐号信息
  async update(id: number, user: User) {
    return this.usersRepository.update(id,  user)
  }

  // 查询帐号
  async queryLoginUser(user: string): Promise<User[]> {
    return await this.usersRepository.find({where: { user }})
  }

  async queryUser(user: string): Promise<User> {
    return await this.usersRepository.findOne(user)
  }

  // 查找帐号你密码
  async queryLoginPassword(loginForm: User): Promise<User[]> {
    return await this.usersRepository
    .find({where: { 
      user: loginForm.user, 
      password: loginForm.password }
    })
  }
}