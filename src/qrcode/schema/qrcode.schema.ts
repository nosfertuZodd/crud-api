import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Qrcode {
  @Prop()
  code?: String;
}

export const QrcodeSchema = SchemaFactory.createForClass(Qrcode);
