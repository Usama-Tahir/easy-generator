import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class AuthPayload {
  /**
   * The user who logged in.
   */
  @Field(() => User, { description: 'user object' })
  user: User;

  /**
   * The JWT token.
   */
  @Field(() => String, { description: 'access token' })
  accessToken: string;
}
