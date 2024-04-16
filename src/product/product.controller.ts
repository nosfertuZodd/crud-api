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

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  create(@Body() CreateProductDto: createProductDto) {
    const product = this.productService.create(CreateProductDto);
    return product;
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
  update(
    @Body() updateProductDto: createProductDto,
    @Param('id') id,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }
  @Delete()
  delete() {}
}
