import { Inject, Injectable } from '@nestjs/common';
import { CreateQrcodeDto } from './dto/create-qrcode.dto';
import { UpdateQrcodeDto } from './dto/update-qrcode.dto';
import * as qrcode from 'qrcode';
import { Model } from 'mongoose';
import { Qrcode } from './interface/qrcode.entity';

@Injectable()
export class QrcodeService {
  constructor(@Inject('QRCODE_MODEL') private qrcodeModel: Model<Qrcode>) {}

  async create() {
    const qrCodeDataURL = await qrcode.toDataURL('data');
    const qr = new this.qrcodeModel({ qrCodeDataURL });
    return await qr.save();
  }

  findAll() {
    return `This action returns all qrcode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qrcode`;
  }

  update(id: number, updateQrcodeDto: UpdateQrcodeDto) {
    return `This action updates a #${id} qrcode`;
  }

  remove(id: number) {
    return `This action removes a #${id} qrcode`;
  }
}
