import { Connection } from 'mongoose';
import { CouponSchema } from './schema/coupon.schema';

export const couponProviders = [
  {
    provide: 'COUPON_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Coupon', CouponSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
