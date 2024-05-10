"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Color_1 = __importDefault(require("./Color"));
const Size_1 = __importDefault(require("./Size"));
let ProductVariant = class ProductVariant {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], ProductVariant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], ProductVariant.prototype, "barcode", void 0);
__decorate([
    (0, typeorm_1.Column)()
], ProductVariant.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.Column)()
], ProductVariant.prototype, "sizeId", void 0);
__decorate([
    (0, typeorm_1.Column)()
], ProductVariant.prototype, "colorId", void 0);
__decorate([
    (0, typeorm_1.Column)()
], ProductVariant.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], ProductVariant.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)()
], ProductVariant.prototype, "date_updated", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)()
], ProductVariant.prototype, "date_deleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Color_1.default, (color) => color.productVariants, { onDelete: 'CASCADE', eager: true })
], ProductVariant.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Size_1.default, (size) => size.productVariants, { onDelete: 'CASCADE', eager: true })
], ProductVariant.prototype, "size", void 0);
ProductVariant = __decorate([
    (0, typeorm_1.Entity)('product_variant'),
    (0, typeorm_1.Unique)(['barcode'])
], ProductVariant);
exports.default = ProductVariant;
