"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbVariables = void 0;
require("dotenv/config");
const { DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD, DB_USERNAME } = process.env;
exports.dbVariables = {
    type: 'postgres',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
    entities: [],
    synchronize: true,
};
