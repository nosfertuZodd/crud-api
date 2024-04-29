import { IsNotEmpty, IsString } from 'class-validator';
import * as qrcode from 'qrcode';
export class CreateQrcodeDto {
  @IsNotEmpty()
  code: string;

  @IsString()
  productId: string;
}
