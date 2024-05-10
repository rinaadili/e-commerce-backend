import {AppDataSource} from "../database/app.datasource";
import ProductVariant from "../models/ProductVariant";
import {Product} from "../models/Product";
import {CreateProductDto} from "../dtos/CreateProductDto";
import CategoryService from "./CategoryService";

class ProductService {
    private productRepository = AppDataSource.getRepository(Product);
    private productVariantRepository = AppDataSource.getRepository(ProductVariant);

    async getAllProducts() {
        return await this.productRepository.find({relations: ['productVariants', 'category', 'productVariants.size', 'productVariants.color']});
    }

    async createProduct(data: CreateProductDto) {
        const category = await CategoryService.getCategoryById(data.categoryId)
        if(!category) throw new Error('Category not found');

        const product = await this.productRepository.create(data);
        product.category = category;
        await this.productRepository.save(product);

        const variants = data.variants;

        if(variants.length > 0) {
            //Create product for each variant
            for (let i = 0; i < variants.length; i++) {
                // const size = await SizeService.getSizeById(variants[i].size as unknown as number)
                // const variantData = {
                //     barcode: (data.barcode + (i + 1)),
                //     inventory: variants[i].inventory,
                //     sizeId: variants[i].sizeId,
                //     colorId: variants[i].colorId
                // }

                let variantData = {barcode: (data.barcode + (i + 1))};
                variantData = {...variantData, ...variants[i]};

                const variant = await this.productVariantRepository.create(variantData);
                variant.product = product;
                await this.productVariantRepository.save(variant);
            }
        }
    }
}

export default new ProductService();