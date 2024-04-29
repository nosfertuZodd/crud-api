import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { createProductDto } from './dto/createProduct.dto';
import { updateProductDto } from './dto/updateProduct.dto';
import * as qrcode from 'qrcode';
import { CreateQrcodeDto } from 'src/qrcode/dto/create-qrcode.dto';
import { QrcodeService } from 'src/qrcode/qrcode.service';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
    private qrcodeService: QrcodeService,
  ) {}

  async generateQrCode() {}
  async create(CreateProductDto: createProductDto): Promise<Product> {
    const createdProduct = new this.productModel(CreateProductDto);
    const QrcodeDto = new CreateQrcodeDto();
    const qr = await this.qrcodeService.create(QrcodeDto);
    createdProduct.qr = qr._id.toString();

    return { ...createdProduct.save(), qr: qr.save() };

    // return createdProduct.save();
  }
  findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
  findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id });
  }

  update(id: string, UpdateProductDto: updateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, UpdateProductDto, {
      new: true,
    });
  }
  remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id);
  }
}
