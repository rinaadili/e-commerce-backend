import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import {sanitize} from "class-sanitizer";

export default function dtoValidationMiddleware(type: any, skipMissingProperties = false): RequestHandler {
    return (req, res, next) => {
        let body = req.body;
        if(req.body.data) {
            body = JSON.parse(req.body.data);
        }

        const dtoObj = plainToClass(type, body);
        const errorsList: ({ [type: string]: string } | undefined)[] = [];
        validate(dtoObj, { skipMissingProperties }).then((errors: ValidationError[]) => {
            if (errors.length > 0) {
                return res.status(400).send(errors[0].constraints);
            } else {
                // Sanitize the object and call the next middleware
                sanitize(dtoObj);
                req.body = dtoObj;
                return next();
            }
        });
    };
}
