import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '1AGy4bCUoECDZ4yI6h8DxHDwgj84EqStMNyab8nPChQ='
    });
  }

  async validate(payload, done: VerifiedCallback) {
    console.log('payload: ', payload);
    const { name } = payload;
    const entity = await this.userService.queryUser(name);
    if (!entity) {
      throw new UnauthorizedException('没找到用户。');
    }
    return entity;
  }
}