import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../entitiy/category.entity";
import { Repository } from "typeorm";
import { CategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/category-update.dto";

@Injectable()
export class CategoryRepository {
    constructor(@InjectRepository(CategoryEntity)
                private  categoryRepo:Repository<CategoryEntity>){}
    async create(createCategoryDto:CategoryDto){
        const category = await this.categoryRepo
        .createQueryBuilder()
        .insert()
        .values(createCategoryDto)
        .execute()
        

        return category.generatedMaps
    }

    findAll(){
        return this.categoryRepo
        .createQueryBuilder('category')
        .getMany()
    }

    findOne(id:number){
        return this.categoryRepo.createQueryBuilder('category')
        .where('category.id = :id', { id })
    }

    async update(id:number,updateCategoryDto:UpdateCategoryDto){
        await this.categoryRepo
        .createQueryBuilder('cateogry')
        .update()
        .set(updateCategoryDto)
        .where('id = :id',{id})
        .execute()

        return this.categoryRepo
        .createQueryBuilder('category')
        .where('category.id')
        .getOne()
    }
    async delete(id:number){
        await this.categoryRepo
        .createQueryBuilder('category')
        .softDelete()
        .where('id = :id', {id})
        .execute()

        return this.categoryRepo
        .createQueryBuilder('category')
        .withDeleted()
        .where('category.id = :id', {id})

    }

}