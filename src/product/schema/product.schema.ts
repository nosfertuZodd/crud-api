import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Coupon } from 'src/coupon/schema/coupon.schema';

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

  @Prop()
  qr: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
