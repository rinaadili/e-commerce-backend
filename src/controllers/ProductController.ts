import {Request, Response} from "express";
import ProductServices from "./../services/ProductService";
class ProductController {
    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductServices.getAllProducts();
            return res.status(200).json({ products })
        } catch (error) {
            console.log(error);
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async getProduct(req: Request, res: Response) {
        try {
            return res.status(200).json({  })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async getProductsByColor(req: Request, res: Response) {
        try {
            return res.status(200).json({  })
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
            return res.status(200).json({  })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            return res.status(200).json({  })
        } catch (error) {
            return res.status( 500).json({ message: 'Something went wrong!' });
        }
    }
}

export default new ProductController();