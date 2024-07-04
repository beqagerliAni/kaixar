import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-pruduct.dto';
import { UpdateProductDto } from './dto/update-prorduct.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService:ProductsService) {}
    @Get(':id')
    findOne(@Param('id') id:number){
        console.log('id',id);
        
        return this.productService.findOne(id)
    }
    @Get()
    getAll(){
        console.log('findOne');
        
        return this.productService.getAll()
    }
    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.productService.delete(+id)
    }
    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return this.productService.create(createProductDto)
    }
    @Get(':/product/:search:')
    search(
        @Param('search') @Query() search:string,
        @Param('product') @Query() product:string,
        ){
        console.log('search',search);
        return this.productService.search(search,product)
    }
    @Post(':id')
    update(id:number,updateProductDto:UpdateProductDto){
        return this.productService.update(id,updateProductDto)
    }



}
