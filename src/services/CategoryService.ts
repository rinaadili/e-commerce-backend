import {AppDataSource} from "../database/app.datasource";
import Category from "../models/Category";
import {CreateCategoryDto} from "../dtos/CreateCategoryDto";

class CategoryService {
    private categoryRepository = AppDataSource.getRepository(Category);

    async createCategory(data: CreateCategoryDto) {
        const category = this.categoryRepository.create(data);
        return await this.categoryRepository.save(category);
    }

    async getCategoryById(categoryId: number) {
        return await this.categoryRepository.findOne({where: { id: categoryId }});
    }
}

export default new CategoryService();