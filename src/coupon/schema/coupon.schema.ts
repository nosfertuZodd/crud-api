import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Schema()
export class Coupon {
  @Prop()
  @IsNotEmpty()
  applyCoupon: string;

  @Prop()
  @IsNotEmpty()
  couponId: string;

  @Prop()
  @IsOptional()
  title: string;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
