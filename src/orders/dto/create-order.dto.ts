import { IsArray, IsNumber, IsString } from "class-validator";

export class Orderdto {
    @IsArray({each:true})
    @IsNumber()
    productId:number[]

    @IsString()
    orderNumber:string
}