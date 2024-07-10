import { ProductEntity } from "src/products/entity/product.entity"
import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, PrimaryGeneratedColumn, Entity, ManyToMany } from "typeorm"
@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: "varchar"})
    name:string
    
    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

    @Column()
    categoryId:number

    @ManyToMany(() => ProductEntity, (product) =>  product.category)
    product:ProductEntity[]
}