import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productProviders } from './product.provider';
import { DatabaseModule } from 'src/database/db.module';
import { couponProviders } from 'src/coupon/coupon.provider';
import { CouponService } from 'src/coupon/coupon.service';
import { qrCodeProviders } from 'src/qrcode/qrcode.provider';
import { QrcodeService } from 'src/qrcode/qrcode.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    ...productProviders,
    ...couponProviders,
    ...qrCodeProviders,
    CouponService,
    QrcodeService,
  ],
})
export class ProductModule {}
