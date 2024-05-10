"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("./../services/ProductService"));
class ProductController {
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield ProductService_1.default.getAllProducts();
                return res.status(200).json({ products });
            }
            catch (error) {
                return res.status(500).json({ message: 'Something went wrong!' });
            }
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({});
            }
            catch (error) {
                return res.status(500).json({ message: 'Something went wrong!' });
            }
        });
    }
    getProductsByColor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({});
            }
            catch (error) {
                return res.status(500).json({ message: 'Something went wrong!' });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({});
            }
            catch (error) {
                return res.status(500).json({ message: 'Something went wrong!' });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({});
            }
            catch (error) {
                return res.status(500).json({ message: 'Something went wrong!' });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({});
            }
            catch (error) {
                return res.status(500).json({ message: 'Something went wrong!' });
            }
        });
    }
}
exports.default = new ProductController();
