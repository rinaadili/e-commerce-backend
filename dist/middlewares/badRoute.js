"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
exports.default = (app) => {
    app.use((req, res, next) => {
        throw new http_errors_1.NotFound('This route does not exist');
    });
};
