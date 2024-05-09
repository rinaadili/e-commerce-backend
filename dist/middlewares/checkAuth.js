"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const verifyToken_1 = require("../utils/verifyToken");
const http_errors_1 = require("http-errors");
const checkAuth = (req, res, next) => {
    try {
        const authorizationToken = req.headers.authorization;
        if (!authorizationToken)
            throw new http_errors_1.Unauthorized();
        const token = authorizationToken.split(' ');
        if (token[0] !== 'Bearer')
            throw new http_errors_1.Unauthorized();
        const data = (0, verifyToken_1.verifyToken)(token[1]);
        if (!data)
            throw new http_errors_1.Unauthorized();
        req.user = data;
        return next();
    }
    catch (err) {
        throw new http_errors_1.Unauthorized();
    }
};
exports.checkAuth = checkAuth;
