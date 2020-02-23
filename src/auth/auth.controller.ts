import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
    jwtGetToken(
        @Body('user') user: string,
        @Body('password') password: string
    ) {
        // 请求token，并注册资源
    }
}
