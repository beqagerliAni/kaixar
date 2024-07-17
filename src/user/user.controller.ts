import { Body,  Post,Controller, Get, Param } from "@nestjs/common";
import { SingupUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
@Controller("user")
export class UserConrtoller {
    constructor(private userService:UserService){}
    @Post()
    async singeup(@Body() singupUserDto:SingupUserDto){
        return await this.userService.singeup(singupUserDto)
    }
    async singIn(username:string,password:string ){
        return await this.userService.singIn(username,password)
    }
}