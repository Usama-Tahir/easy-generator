import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './entities/auth.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlLocalAuthGuard } from './guards/local-auth.guard';
import { LoginInput } from './dto/login-input.dto';

@Resolver(() => AuthPayload)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async signUp(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<AuthPayload> {
    return this.authService.register(createUserInput);
  }

  @Mutation(() => AuthPayload)
  @UseGuards(GqlLocalAuthGuard)
  async login(@Args('loginInput') loginInput: LoginInput, @Context() context) {
    const { accessToken } = await this.authService.login(context.req.user);
    return {
      accessToken,
      user: context.req.user,
    };
  }
}
