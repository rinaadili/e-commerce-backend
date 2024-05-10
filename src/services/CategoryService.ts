import {AppDataSource} from "../database/app.datasource";
import Category from "../models/Category";

class CategoryService {
    private categoryRepository = AppDataSource.getRepository(Category);

    async getCategories() {
        return await this.categoryRepository.find();
    }

    async getCategoryById(categoryId: number) {
        return await this.categoryRepository.findOne({where: { id: categoryId }});
    }
}

export default new CategoryService();