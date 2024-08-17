import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  currentUser(@CurrentUser() user: User) {
    return user;
  }
}
