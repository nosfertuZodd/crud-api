import { IsNotEmpty } from 'class-validator';

export class createProductDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly stock: string;
  @IsNotEmpty()
  readonly quantity: string;
}
