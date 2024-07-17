import { IsString, IsUrl } from "class-validator"

export class CategoryDto {
    @IsString()
    name!: string

    @IsUrl()
    imageUrl!:string
}