import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import ProductVariant from "./ProductVariant";
@Entity('colors')
@Unique(['name'])
export default class Color {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @OneToMany(() => ProductVariant, (productVariant) => productVariant.color)
    productVariants: ProductVariant[];
}
