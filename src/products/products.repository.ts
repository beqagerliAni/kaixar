import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./entity/product.entity";
import { Repository } from "typeorm";
import { Body, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-pruduct.dto";
import { UpdateProductDto } from "./dto/update-prorduct.dto";
@Injectable()
export class ProductRepository {
    constructor(@InjectRepository(ProductEntity) private prouductRepository:Repository<ProductEntity>){}
    async findOne(id:number){
        return await this.prouductRepository
        .createQueryBuilder('product')
        .where('product.id = :id', {id: `${id}`})
        .getOne()
    }
    
    async getAll(){
        return this.prouductRepository
        .createQueryBuilder()
        .getMany()
    }

    async delete(id:number) {
        return await this.prouductRepository
        .createQueryBuilder()
        .delete()
        .where('id =:productId', {productId: id})
        .execute()
    }

    async create(createProduct: CreateProductDto){
        const newProduct = await this.prouductRepository
        .createQueryBuilder()
        .insert()
        .values(createProduct)
        .execute()

        return newProduct.generatedMaps

    }

    async orderByAsc(){
        return this.prouductRepository
        .createQueryBuilder('products')
        .orderBy('product.price', 'ASC')
        .getMany()
    }

    async update(id:number,updateProductDto:UpdateProductDto){
        const newProduct =  this.prouductRepository
        .createQueryBuilder('product')
        .update()
        .set(updateProductDto)
        .where('product.id = :id', {id:id})
        .execute()

        return this.prouductRepository
        .createQueryBuilder('product')
        .where('product.id = :id', {id:id})
        .getOne()
    }
}