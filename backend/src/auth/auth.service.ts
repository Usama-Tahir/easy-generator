import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { AuthVariables } from 'src/config/auth.config';
import { JwtPayload } from './types';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<AuthVariables>,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDocument> {
    const user = await this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isValidPassport = await user.comparePassword(password);
    if (isValidPassport === false) {
      throw new BadRequestException('Invalid credentials');
    }
    return user;
  }

  async login(user: UserDocument) {
    const jwtPayload: JwtPayload = {
      username: user.email || '',
      userId: user.id,
      sub: user.email,
    };
    const accessToken = this.generateAccessToken(jwtPayload);
    return { accessToken: accessToken };
  }

  async register(user: CreateUserInput) {
    const existingUser = await this.usersService.findOneByEmail(user.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }
    const createdUser = await this.usersService.create(user);
    const { accessToken } = await this.login(createdUser);
    return {
      accessToken,
      user: createdUser,
    };
  }

  private generateAccessToken(payload: JwtPayload): string {
    const authConfig = this.configService.get('auth', { infer: true });
    const accessTokenSecret = authConfig?.authTokenSecret;
    const accessTokenExpiration = authConfig?.accessTokenExpiration;

    return this.jwtService.sign(payload, {
      secret: accessTokenSecret,
      expiresIn: accessTokenExpiration,
    });
  }
}
