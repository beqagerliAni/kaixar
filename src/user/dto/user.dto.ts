import { IsString } from "class-validator"

export class SingupUserDto {
    @IsString()
    username:string
    @IsString()
    password:string
}