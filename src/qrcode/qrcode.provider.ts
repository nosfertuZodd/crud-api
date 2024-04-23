import { Connection } from 'mongoose';
import { Qrcode, QrcodeSchema } from './schema/qrcode.schema';

export const qrCodeProviders = [
  {
    provide: 'QRCODE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Qrcode', QrcodeSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
