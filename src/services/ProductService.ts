import {AppDataSource} from "../database/app.datasource";
import ProductVariant from "../models/ProductVariant";
import {Product} from "../models/Product";
import {CreateProductDto} from "../dtos/CreateProductDto";
import CategoryService from "./CategoryService";
import {UpdateProductDto} from "../dtos/UpdateProductDto";

class ProductService {
    private productRepository = AppDataSource.getRepository(Product);
    private productVariantRepository = AppDataSource.getRepository(ProductVariant);

    async getAllProducts() {
        return await this.productRepository.find({relations: ['productVariants', 'category', 'productVariants.size', 'productVariants.color']});
    }

    async getProductById(productId: number) {
        return await this.productRepository.findOne({where: { id: productId }, relations: ['productVariants', 'category', 'productVariants.size', 'productVariants.color']});
    }

    async getProductsByCategory(categoryId: number) {
        return await this.productRepository.find({where: { categoryId }, relations: ['productVariants', 'category', 'productVariants.size', 'productVariants.color']});
    }

    generateBarcode() {
        const year = new Date().getFullYear().toString().substring(2);
        const random = Math.floor(Math.random() * 9000 + 1000);
        return year + '' + random;
    }
    async createProduct(data: CreateProductDto) {
        const category = await CategoryService.getCategoryById(data.categoryId);
        if(!category) throw new Error('Category not found');

        const product = this.productRepository.create(data);
        product.barcode = this.generateBarcode();
        product.category = category;
        await this.productRepository.save(product);

        const variants = data.variants;

        if(variants.length > 0) {
            for (let i = 0; i < variants.length; i++) {
                let variantData = {barcode: (product.barcode + (i + 1))};
                variantData = {...variantData, ...variants[i]};

                const variant = await this.productVariantRepository.create(variantData);
                variant.product = product;
                await this.productVariantRepository.save(variant);
            }
        }

        return product;
    }

    async updateProduct(productId: number, data: UpdateProductDto) {
        const product = await this.productRepository.findOne({where: { id: productId }});
        if(!product) throw new Error('Product not found');

        const category = await CategoryService.getCategoryById(data.categoryId);
        if(!category) throw new Error('Category not found');

        return await this.productRepository.update({id: productId}, data);
    }

    async deleteProduct(productId: number) {
        const product = await this.productRepository.findOne({where: { id: productId }});
        if(!product) throw new Error('Product not found');

        return await this.productRepository.delete({id: productId});
    }
}

export default new ProductService();