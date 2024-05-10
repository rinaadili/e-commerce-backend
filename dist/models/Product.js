"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true })
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Product.prototype, "barcode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], Product.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)()
], Product.prototype, "date_updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)()
], Product.prototype, "date_deleted", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)('master_products'),
    (0, typeorm_1.Unique)(['barcode'])
], Product);
exports.Product = Product;
