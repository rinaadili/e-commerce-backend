import {Router} from "express";
import ProductController from "../controllers/ProductController";
import CategoryController from "../controllers/CategoryController";
import ColorController from "../controllers/ColorController";
import SizeController from "../controllers/SizeController";
import {CreateProductDto} from "../dtos/CreateProductDto";
import dtoValidationMiddleware from "../middlewares/dtoValidator";
import {UpdateProductDto} from "../dtos/UpdateProductDto";
import {CreateCategoryDto} from "../dtos/CreateCategoryDto";
import {CreateColorDto} from "../dtos/CreateColorDto";
import {CreateSizeDto} from "../dtos/CreateSizeDto";

const router = Router();

router.get('/get-products', ProductController.getAllProducts);
router.get('/get-product/:id', ProductController.getProduct);
router.get('/get-products-by-category/:id', ProductController.getProductsByCategory);
router.post('/create-product', [dtoValidationMiddleware(CreateProductDto)], ProductController.createProduct);
router.patch('/update-product/:id', [dtoValidationMiddleware(UpdateProductDto)], ProductController.updateProduct);
router.delete('/delete-product/:id', ProductController.deleteProduct);

router.post('/create-category', [dtoValidationMiddleware(CreateCategoryDto)], CategoryController.createCategory);
router.post('/create-color', [dtoValidationMiddleware(CreateColorDto)], ColorController.createColor);
router.post('/create-size', [dtoValidationMiddleware(CreateSizeDto)], SizeController.createSize);

export default router;
