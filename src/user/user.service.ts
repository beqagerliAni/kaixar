import { Injectable } from "@nestjs/common";
import { SingupUserDto } from "./dto/user.dto";
import { UserRepository } from "./repo/user.repository";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class UserService{
    constructor(private userRepository:UserRepository, private jwtService:JwtService){}
    singeup(singupUserDto:SingupUserDto){
        console.log("shemovida");
        
        return this.userRepository.singup(singupUserDto)
    }
    async singIn(username:string,password:string){
        const user = await this.userRepository.findByName(username)
        const checked = await bcrypt.compare(user.password, password)

        if(user && checked) {
            const payload = { sub: user.username, password: user.password }
            return {
               access_token: await this.jwtService.signAsync(payload),
            }
        }
    }
}

