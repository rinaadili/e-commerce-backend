import {IsString} from 'class-validator'
export class UpdateProductDto {
    @IsString()
    name: string;

    price: number;

    @IsString()
    description: string;

    categoryId: number;
}