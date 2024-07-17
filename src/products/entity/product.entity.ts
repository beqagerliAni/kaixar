import { CategoryEntity } from "src/category/entitiy/category.entity"
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
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

    @Column()
    image:string
    
    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

    
}