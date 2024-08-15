import { Injectable } from '@nestjs/common';
import { CreateAuthInput } from './dto/create-auth.input';

@Injectable()
export class AuthService {
  create(createAuthInput: CreateAuthInput) {
    return createAuthInput;
  }
}
