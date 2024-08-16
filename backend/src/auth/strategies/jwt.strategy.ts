import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigType } from '@nestjs/config';
import authConfig from '../../config/auth.config';
import { UserService } from '../../user/user.service';

interface JwtPayload {
  sub: string;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(authConfig.KEY)
    private readonly authConfiguration: ConfigType<typeof authConfig>,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfiguration.authTokenSecret,
      passReqToCallback: true,
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    try {
      console.log('payload', payload);
      const user = await this.userService.findOneByEmail(payload.sub);
      if (!user || !user.isActive) {
        throw new UnauthorizedException('User not found');
      }

      user;
    } catch (error) {
      throw new UnauthorizedException('Invalid token payload');
    }
  }
}
