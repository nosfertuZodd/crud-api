import { IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCouponDto {
  @IsNotEmpty()
  @IsBoolean()
  private readonly applyCoupon?: string;
  @IsNotEmpty()
  private readonly couponId?: string;
  @IsNotEmpty()
  private readonly title?: string;
}
