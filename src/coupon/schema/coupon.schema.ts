import * as mongoose from 'mongoose';

export const CouponSchema = new mongoose.Schema({
  couponId: String,
  title: String,
});
