import { CategoryEntity } from "src/category/entitiy/category.entity"
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Url } from "url"
@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    productId:number

    @Column({type: 'varchar', length:255})
    name:string

    @Column({type: 'decimal'})
    price:number

    @Column()
    category:string

    @Column({type: 'decimal', default: 0})
    sale:number

    @Column({type: 'longtext'})
    description:string

    @Column()
    image:string

    @ManyToMany(() => CategoryEntity, (category) => category.product)
    @JoinColumn()
    Category:CategoryEntity[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

    
}