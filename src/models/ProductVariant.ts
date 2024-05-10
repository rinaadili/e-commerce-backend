import {
    Column,
    CreateDateColumn, DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from "typeorm";
import Color from "./Color";
import Size from "./Size";
@Entity('product_variant')
@Unique(['barcode'])
export default class ProductVariant {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    barcode: string;

    @Column()
    inventory: number;

    @Column()
    sizeId: number;

    @Column()
    colorId: number;

    @Column()
    productId: number;

    @CreateDateColumn()
    date_created: Date

    @UpdateDateColumn()
    date_updated: Date

    @DeleteDateColumn()
    date_deleted: Date

    @ManyToOne(() => Color, (color) => color.productVariants, {onDelete: 'CASCADE', eager: true})
    color: Color;

    @ManyToOne(() => Size, (size) => size.productVariants, {onDelete: 'CASCADE', eager: true})
    size: Size;
}
