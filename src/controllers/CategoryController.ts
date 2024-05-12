import CategoryService from "../services/CategoryService";
import {Request, Response} from "express";
class CategoryController {
    async createCategory(req: Request, res: Response) {
        try {
            const category = await CategoryService.createCategory(req.body);
            return res.status(200).json({ category })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }
}

export default new CategoryController();