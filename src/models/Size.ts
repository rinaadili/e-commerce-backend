import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import ProductVariant from "./ProductVariant";
@Entity('sizes')
export default class Size {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @OneToMany(() => ProductVariant, (productVariant) => productVariant.size)
    productVariants: ProductVariant[];
}
