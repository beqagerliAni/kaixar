import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './repo/category,repository';
import { CategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/category-update.dto';

@Injectable()
export class CategoryService {
    constructor(private categoryRepo: CategoryRepository) {}

    create(createCategoryDto:CategoryDto) {
        return this.categoryRepo.create(createCategoryDto)
    }
    findAll(){
        return this.categoryRepo.findAll()
    }
    findOne(id:number){
        return this.categoryRepo.findOne(id)
    }
    update(id:number, updateCategoryDto:UpdateCategoryDto){
        return this.categoryRepo.update(id,updateCategoryDto)
    }
    delete(id:number){
        return this.categoryRepo.delete(id)
    }
}
