import {Request, Response} from "express";
import ProductServices from "./../services/ProductService";
class ProductController {
    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductServices.getAllProducts();
            return res.status(200).json({ products });
        } catch (error) {
            console.log(error);
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async getProduct(req: Request, res: Response) {
        try {
            const id = req.params.id as unknown as number;
            const product = await ProductServices.getProductById(id);
            return res.status(200).json({ product });
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async getProductsByCategory(req: Request, res: Response) {
        try {
            const categoryId = req.params.id as unknown as number;
            const products = await ProductServices.getProductsByCategory(categoryId);
            return res.status(200).json({ products });
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const createProduct = await ProductServices.createProduct(req.body);
            return res.status(200).json({ createProduct })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const productId = req.params.id as unknown as number;
            await ProductServices.updateProduct(productId, req.body);
            return res.status(200).json({ message: "Product updated successfully!" })
        } catch (error) {
            console.log(error)
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const productId = req.params.id as unknown as number;
            await ProductServices.deleteProduct(productId);
            return res.status(200).json({ message: "Product deleted successfully!" });
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }
}

export default new ProductController();