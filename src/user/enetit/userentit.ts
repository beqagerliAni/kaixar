import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    password:string
    @Column()
    username:string
    @Column({default: "user"})
    role: string;
}