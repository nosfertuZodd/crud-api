import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCouponDto } from 'src/coupon/dto/create-coupon.dto';

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

  @IsOptional()
  coupon?: CreateCouponDto;

  @Prop()
  @IsNotEmpty()
  qr: string;
}
