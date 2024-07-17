import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./entity/product.entity";
import { Repository } from "typeorm";
import { Body, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-pruduct.dto";
import { UpdateProductDto } from "./dto/update-prorduct.dto";
import { CategoryEntity } from "src/category/entitiy/category.entity";
@Injectable()
export class ProductRepository {
    constructor(@InjectRepository(ProductEntity) private prouductRepository:Repository<ProductEntity>){}
    async findOne(id:number){
        return await this.prouductRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.categories', 'category')
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

    async create(createProduct: CreateProductDto) {
        const product = new ProductEntity()
        product.name = createProduct.name
        product.price = createProduct.price
        product.description= createProduct.description
        product.image = createProduct.image

        const  categoryAraay: CategoryEntity[] = []

        for(const categoriesId of createProduct.categories) {
            const category = new CategoryEntity()
            category.id = categoriesId
            console.log(category , 'category')
            categoryAraay.push(category)
        }
        
        
        product.categories = categoryAraay

        return await this.prouductRepository.save(product)
        
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
        .where('product.id = :id', {id:id})
        .execute()

        return this.prouductRepository
        .createQueryBuilder('product')
        .where('product.id = :id', {id:id})
        .getOne()
    }
}