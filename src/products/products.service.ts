import { Injectable } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { CreateProductDto } from './dto/create-pruduct.dto';
import { UpdateProductDto } from './dto/update-prorduct.dto';

@Injectable()
export class ProductsService {
    constructor(private productRepository:ProductRepository){}
    findOne(id:number){
        return this.productRepository.findOne(id)
    }
    getAll(){
        return this.productRepository.getAll()
    }
    delete(id:number){
        return this.productRepository.delete(id)
    }
    create(createProductDto:CreateProductDto){
        return this.productRepository.create(createProductDto)
    }
    search(search:string,product:string){
        return this.productRepository.search(search,product)
    }
    update(id:number,updateProductDto:UpdateProductDto){
        return this.productRepository.update(id,updateProductDto)
    }

}
