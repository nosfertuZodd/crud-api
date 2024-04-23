import { Module } from '@nestjs/common';
import { QrcodeService } from './qrcode.service';
import { QrcodeController } from './qrcode.controller';
import { qrCodeProviders } from './qrcode.provider';
import { DatabaseModule } from 'src/database/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [QrcodeController],
  providers: [QrcodeService, ...qrCodeProviders],
})
export class QrcodeModule {}
