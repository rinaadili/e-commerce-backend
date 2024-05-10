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
Object.defineProperty(exports, "__esModule", { value: true });
const app_datasource_1 = require("../database/app.datasource");
const Product_1 = require("../models/Product");
class ProductService {
    constructor() {
        this.productRepository = app_datasource_1.AppDataSource.getRepository(Product_1.Product);
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.find({ relations: ['productVariants', 'productVariants.size', 'productVariants.color'] });
        });
    }
}
exports.default = new ProductService();
