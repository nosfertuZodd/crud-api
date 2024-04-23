import { Document } from 'mongoose';

export interface Qrcode extends Document {
  readonly couponId: String;
  readonly title: String;
}
