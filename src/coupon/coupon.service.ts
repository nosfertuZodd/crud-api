import { Injectable, Inject } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon } from './interace/coupon.entity';
import { Model } from 'mongoose';

@Injectable()
export class CouponService {
  constructor(
    @Inject('COUPON_MODEL') private readonly CouponModel: Model<Coupon>,
  ) {}
  create(createCouponDto: CreateCouponDto) {
    const createdCoupon = new this.CouponModel(createCouponDto);
    // const couponId = generateUniqueId({ length: 20 });
    return createdCoupon.save();
  }

  findAll() {
    return this.CouponModel.find().exec();
  }

  findOne(id: number) {
    return this.CouponModel.findOne({ _id: id });
  }

  update(id: number, updateCouponDto: UpdateCouponDto) {
    return this.CouponModel.findByIdAndUpdate(id, updateCouponDto);
  }

  remove(id: number) {
    return this.CouponModel.findByIdAndDelete(id);
  }
}
