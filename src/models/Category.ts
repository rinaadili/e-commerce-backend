import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Product} from "./Product";
@Entity('categories')
@Unique(['name'])
export default class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
