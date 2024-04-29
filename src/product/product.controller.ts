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
import { QrcodeService } from 'src/qrcode/qrcode.service';
import { CreateQrcodeDto } from 'src/qrcode/dto/create-qrcode.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly couponService: CouponService,
    private readonly qrcodeService: QrcodeService,
  ) {}

  @Post('qr')
  qrCode() {}

  @Post()
  create(@Body() CreateProductDto: createProductDto) {
    const product = this.productService.create(CreateProductDto);
    // const qr = this.productService.generateQrCode();

    return { product: product };
  }

  // @Post()
  // create(
  //   @Body() CreateProductDto: createProductDto,
  //   @Body() createCouponDto: CreateCouponDto,
  //   @Body() createQrcodeDto: CreateQrcodeDto,
  // ) {
  //   const product = this.productService.create(CreateProductDto);
  //   // const qr = this.productService.generateQrCode();
  //   const coupon = this.couponService.create(createCouponDto);
  //   const qr = this.qrcodeService.create(createQrcodeDto);

  //   return { product: product, coupon: coupon, qr };
  // }
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
