import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService} from '@nestjs/jwt';
import { User } from 'src/users/user.db';
import { resultRes } from 'src/config/result';
interface ILoginForm {
    user: string,
    password: string
}

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async insprestLogin(loginForm: ILoginForm) {
        const { user, password } = loginForm
        const entity: User = await this.userService.queryUser(user)
        if (!entity) {
            // 用户不存在
            throw new UnauthorizedException('用户不存在')
        }
        
        if (entity.password !== password) {
            throw new UnauthorizedException('登录密码错误')
        }
        const token: string = this.jwtService.sign({
            id: entity.id,
            user: entity.user
        })
        return resultRes(1, '登录成功', {
            token
        })
    }
}
