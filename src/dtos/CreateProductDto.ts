import {IsString, IsNotEmpty, ArrayNotEmpty} from 'class-validator'

export interface Variants {
    colorId: number;
    sizeId: number;
    inventory: number;
}
export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    categoryId: number;

    @IsNotEmpty()
    price: number;

    @IsString()
    description: string;

    @ArrayNotEmpty()
    variants: Variants[];
}