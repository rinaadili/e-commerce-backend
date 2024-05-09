"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        if (err.status === undefined || err.status === 500) {
            return res.json({
                status: 500,
                message: 'Something went wrong'
            });
        }
        return res.json({
            status: err.status || 500,
            message: err.message || 'Something went wrong'
        });
    });
};
