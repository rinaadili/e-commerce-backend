import 'dotenv/config'
import {DataSourceOptions} from 'typeorm'
import ProductVariant from "../models/ProductVariant";
import {Product} from "../models/Product";
import Size from "../models/Size";
import Color from "../models/Color";
import Category from "../models/Category";
const {DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD, DB_USERNAME} = process.env

export const dbVariables: DataSourceOptions = {
    type: 'postgres',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD as string,
    port: DB_PORT as number | undefined | 3306,
    database: DB_NAME,
    entities: [Product, ProductVariant, Size, Color, Category],
    synchronize: true,
}
