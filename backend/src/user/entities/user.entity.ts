import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';
import * as bcrypt from 'bcryptjs';

import fieldDescriptors from '../common/fieldDescriptors';

@ObjectType()
@Schema({ timestamps: true })
export class User extends Document {
  @Field(() => ID, { description: fieldDescriptors.id })
  _id: string;

  @Field({ description: fieldDescriptors.username })
  @Prop({ required: true })
  username: string;

  @Field({ description: fieldDescriptors.email })
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Field(() => Boolean, { description: fieldDescriptors.isActive })
  @Prop({ default: true })
  isActive: boolean;

  @Field({ nullable: true })
  @Prop()
  firstName?: string;

  @Field({ nullable: true })
  @Prop()
  lastName?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string,
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export type UserDocument = User &
  Document & { comparePassword(candidatePassword: string): Promise<boolean> };
