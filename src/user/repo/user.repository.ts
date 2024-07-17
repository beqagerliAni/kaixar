import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../enetit/userentit";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { SingupUserDto } from "../dto/user.dto";
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserRepository {
    constructor(@InjectRepository(UserEntity) private userRepository:Repository <UserEntity>) {}
    async singup(singupUserDto:SingupUserDto){
        const {username,password} = singupUserDto
        const salt = await bcrypt.genSalt()
        const hashedpassword = await bcrypt.hash(password,salt)
        const user = this.userRepository.create({
            username,
            password:hashedpassword,
        })
        await this.userRepository.save(user)
        return user
    }
    async findByName(username:string){
        return await this.userRepository.findOne({where: {username:username}})
    }    

}