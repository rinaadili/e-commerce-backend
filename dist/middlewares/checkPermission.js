"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
function checkPermission(permission) {
    return (req, res, next) => {
        const userPermissions = req.user.permissions;
        if (userPermissions.includes(permission))
            return next();
        throw new http_errors_1.Unauthorized();
    };
}
exports.default = checkPermission;
