import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createProductDto } from './dto/createProduct.dto';
import { ProductService } from './product.service';
import { Product } from './interface/product.interface';
import { updateProductDto } from './dto/updateProduct.dto';
import { CouponService } from 'src/coupon/coupon.service';
import { CreateCouponDto } from 'src/coupon/dto/create-coupon.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly couponService: CouponService,
  ) {}

  @Post('qr')
  qrCode() {}

  @Post()
  create(
    @Body() CreateProductDto: createProductDto,
    @Body() createCouponDto: CreateCouponDto,
  ) {
    const product = this.productService.create(CreateProductDto);
    // const qr = this.productService.generateQrCode();
    const coupon = this.couponService.create(createCouponDto);

    return { product: product, coupon: coupon };
  }
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateProductDto: updateProductDto) {
    return this.productService.update(id, UpdateProductDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
