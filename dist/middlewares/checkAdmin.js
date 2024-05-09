"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
const http_errors_1 = require("http-errors");
const checkAdmin = (req, res, next) => {
    try {
        const isAdmin = req.user.isAdmin;
        if (isAdmin) {
            return next();
        }
        throw new http_errors_1.Unauthorized();
    }
    catch (err) {
        throw new http_errors_1.Unauthorized();
    }
};
exports.checkAdmin = checkAdmin;
