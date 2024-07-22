import { ProductEntity } from "src/products/entity/product.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    orderNumber:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deltedAt:Date

    @OneToMany(() => ProductEntity, (products) => products.orders)
    products:ProductEntity[]
}