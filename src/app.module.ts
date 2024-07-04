import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    port:3306,
    database: 'davaleba',
    username: 'root',
    password: 'NovaNova123!@',
    synchronize:true,
    autoLoadEntities:true,
    type: 'mysql',
    host: 'localhost'
  }),ProductsModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}