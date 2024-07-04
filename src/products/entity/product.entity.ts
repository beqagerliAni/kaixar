import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { Url } from "url"
@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    title:string
    @Column()
    price:number
    @Column()
    category:string
    @Column()
    description:string
    @Column()
    image:string
}