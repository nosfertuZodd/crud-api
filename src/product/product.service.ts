import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './interface/product.interface';
import { createProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}
  create(CreateProductDto: createProductDto): Promise<Product> {
    const createdProduct = new this.productModel(CreateProductDto);
    return createdProduct.save();
  }
  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
  async findOne(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }
}
