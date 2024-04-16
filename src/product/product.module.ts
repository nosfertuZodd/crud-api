import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { productProviders } from './product.provider';
import { DatabaseModule } from 'src/database/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ...productProviders],
})
export class ProductModule {}
