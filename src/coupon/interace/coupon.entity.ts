import { Document } from 'mongoose';

export interface Coupon extends Document {
  readonly couponId: String;
  readonly title: String;
}
