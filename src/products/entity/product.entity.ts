import { CategoryEntity } from "src/category/entitiy/category.entity"
import { Order } from "src/orders/entity/order.entity"
import { Column, CreateDateColumn, DeleteDateColumn, Entity,  JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
@Entity()
export class ProductEntity {
@PrimaryGeneratedColumn()
    id:number

    @Column({type: 'varchar', length:255})
    name:string

    @Column({type: 'decimal'})
    price:number

    @Column({type: 'decimal', default: 0})
    sale:number

    @Column({type: 'longtext'})
    description:string

    @ManyToMany(() => CategoryEntity, (categories) => categories, {cascade: true})
    @JoinTable()
    categories!:CategoryEntity[]

    @ManyToOne(() => Order, (orders) => orders.products)
    orders:Order

    @Column()
    image:string
    
    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

    
}