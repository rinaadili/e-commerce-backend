"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const class_sanitizer_1 = require("class-sanitizer");
function dtoValidationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        let body = req.body;
        if (req.body.data) {
            body = JSON.parse(req.body.data);
        }
        const dtoObj = (0, class_transformer_1.plainToClass)(type, body);
        const errorsList = [];
        (0, class_validator_1.validate)(dtoObj, { skipMissingProperties }).then((errors) => {
            if (errors.length > 0) {
                return res.status(400).send(errors[0].constraints);
            }
            else {
                // Sanitize the object and call the next middleware
                (0, class_sanitizer_1.sanitize)(dtoObj);
                req.body = dtoObj;
                return next();
            }
        });
    };
}
exports.default = dtoValidationMiddleware;
