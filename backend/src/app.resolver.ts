import { Resolver, Query } from '@nestjs/graphql';
import { Public } from './common/decorators/public.decorator';

@Resolver()
export class AppResolver {
  @Public()
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
