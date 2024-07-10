import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/category-update.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}
    @Post()
    create(@Body() createCategoryDto:CategoryDto ){
        return this.categoryService.create(createCategoryDto)
    }
    @Get()
    findAll(){
        return this.categoryService.findAll()
    }
    @Get('id')
    findOne(@Param('id') id:string){
        return this.categoryService.findOne(Number(id))
    }
    @Post(':id')
    update(@Param('id') id:string, @Body() updateCategoryDto:UpdateCategoryDto ){
        return this.categoryService.update(Number(id),updateCategoryDto)
    }
    @Delete('id')
    delete(@Param('id') id:string ){
        return this.categoryService.delete(Number(id))
    }   
}
