import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { createProductDto } from './dto/createProduct.dto';
import { updateProductDto } from './dto/updateProduct.dto';
import * as qrcode from 'qrcode';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async generateQrCode() {}
  async create(CreateProductDto: createProductDto): Promise<Product> {
    const createdProduct = new this.productModel(CreateProductDto);
    const qrCodeDataURL = await qrcode.toDataURL('data');
    return await { ...createdProduct.save(), qrCodeDataURL };

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
