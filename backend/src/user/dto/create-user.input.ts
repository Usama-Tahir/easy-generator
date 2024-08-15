// user/dto/signup.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

import fieldDescriptors from '../common/fieldDescriptors';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: fieldDescriptors.username })
  @IsNotEmpty()
  @MaxLength(50)
  @Transform(({ value }) => value.trim())
  username: string;

  @Field(() => String, { description: fieldDescriptors.email })
  @IsEmail()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @Field(() => String, { description: fieldDescriptors.password })
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and 1 special character',
  })
  password: string;

  @Field({ nullable: true })
  @Transform(({ value }) => (value ? value.trim() : null))
  firstName?: string;

  @Field({ nullable: true })
  @Transform(({ value }) => (value ? value.trim() : null))
  lastName?: string;
}
