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
        return this.prouductRepository.find()
    }
    async delete(id:number) {
        return await this.prouductRepository
        .createQueryBuilder()
        .delete()
        .where('id =:productId', {productId: id})
        .execute()
    }
    async create(createProduct: CreateProductDto){
        const {title,image,category,description,price} = createProduct
        return this.prouductRepository
        .createQueryBuilder()
        .insert()
        .values([
            {title: `${title}`
            ,image: `${image}`
            ,category: `${category}`
            ,description: `${description}`
            ,price: price}
        ])
        .execute()
    }
    async search(search:string,product:string){
        return this.prouductRepository
        .createQueryBuilder('product')
        .where('product.title = :name OR product.id = :name', {name: search})
        .orderBy('product.price', 'DESC')
        .getMany()
    }
    async orderByAsc(){
        return this.prouductRepository
        .createQueryBuilder('products')
        .orderBy('product.price', 'ASC')
        .getMany()
    }
    async update(id:number,updateProductDto:UpdateProductDto){
        return this.prouductRepository.update(id,updateProductDto)
    }
}