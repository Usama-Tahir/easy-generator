import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserInput } from './dto/create-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findOneByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async create(createUserInput: CreateUserInput): Promise<UserDocument> {
    const existingUser = await this.findOneByEmail(createUserInput.email);
    if (existingUser != null) {
      throw new ConflictException('Email already exists');
    }

    const createdUser = new this.userModel(createUserInput);
    return createdUser.save();
  }
}
