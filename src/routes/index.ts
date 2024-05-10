import {Router} from "express";
import ProductController from "../controllers/ProductController";
import {CreateProductDto} from "../dtos/CreateProductDto";
import dtoValidationMiddleware from "../middlewares/dtoValidator";

const router = Router();

router.get('/get-products', ProductController.getAllProducts)
router.post('/create-product', [dtoValidationMiddleware(CreateProductDto)], ProductController.createProduct)


export default router;
