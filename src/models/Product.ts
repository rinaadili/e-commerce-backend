import {
    Column,
    CreateDateColumn, DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from "typeorm";

@Entity('master_products')
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

    @CreateDateColumn()
    date_created: Date;

    @UpdateDateColumn()
    date_updated: Date;

    @DeleteDateColumn()
    date_deleted: Date;
}