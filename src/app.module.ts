import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [ProductModule, UserModule, CouponModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
