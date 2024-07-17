import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    port:3306,
    database: 'cafe',
    username: 'root',
    password: 'NovaNova123!@',
    synchronize:true,
    autoLoadEntities:true,
    type: 'mysql',
    host: 'localhost'
  }),ProductsModule, CategoryModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}