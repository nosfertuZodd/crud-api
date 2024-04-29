import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Coupon } from 'src/coupon/schema/coupon.schema';
import { Qrcode, QrcodeSchema } from 'src/qrcode/schema/qrcode.schema';

@Schema()
export class Product {
  @Prop()
  name: String;

  @Prop()
  stock: Number;

  @Prop()
  quantity: Number;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Coupon' })
  coupon: Coupon;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Qrcode' })
  qr: Qrcode;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
