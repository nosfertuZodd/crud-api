import { Document } from 'mongoose';

export interface Qrcode extends Document {
  readonly code?: String;
}
