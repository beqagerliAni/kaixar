import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, DeleteDateColumn } from 'typeorm';
import { ProductEntity } from 'src/products/entity/product.entity';

@Entity()
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column()
    imgUrl: string;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToMany(() => ProductEntity, product => product.categories)
    products!: ProductEntity[]
}
