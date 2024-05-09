"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const App_1 = __importDefault(require("./App"));
const app_datasource_1 = require("./database/app.datasource");
const { APP_PORT, APP_NAME } = process.env;
App_1.default.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
    app_datasource_1.AppDataSource.initialize().then(() => {
        console.log(`${APP_NAME} connected to database!`);
    }).catch(error => {
        console.log('Error connection to database');
        console.log(error);
    });
});
