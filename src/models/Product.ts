import {
    Column,
    CreateDateColumn, DeleteDateColumn,
    Entity, ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from "typeorm";
import ProductVariant from "./ProductVariant";
import Category from "./Category";

@Entity('products')
@Unique(['barcode'])
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;

    @Column()
    barcode: string;

    @Column({type: 'decimal', precision: 10, scale: 2, default: 0.0})
    price: number;

    @Column()
    categoryId: number;

    @CreateDateColumn()
    date_created: Date;

    @UpdateDateColumn()
    date_updated: Date;

    @DeleteDateColumn()
    date_deleted: Date;

    @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
    productVariants: ProductVariant[];

    @ManyToOne(() => Category, (category) => category.products, {onDelete: 'CASCADE'})
    category: Category;
}