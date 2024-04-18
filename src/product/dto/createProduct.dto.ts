import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';

export class createProductDto {
  @IsNotEmpty()
  @Prop()
  readonly name: string;
  @IsNotEmpty()
  @Prop()
  readonly stock: string;
  @IsNotEmpty()
  @Prop()
  readonly quantity: string;
}
