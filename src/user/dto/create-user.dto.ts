import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Prop()
  readonly name: string;
  @IsNotEmpty()
  @Prop()
  readonly email: string;
  @IsNotEmpty()
  @Prop()
  readonly password: string;
}
