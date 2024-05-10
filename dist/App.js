"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bodyParser_1 = __importDefault(require("./middlewares/bodyParser"));
const badRoute_1 = __importDefault(require("./middlewares/badRoute"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)({
            origin: '*',
            methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
            optionsSuccessStatus: 200
        }));
        this.loadBodyParser();
        this.app.use(express_1.default.static('uploads'));
        this.loadRoutes();
    }
    loadBodyParser() {
        (0, bodyParser_1.default)(this.app);
    }
    loadRoutes() {
        this.app.use(routes_1.default);
        (0, badRoute_1.default)(this.app);
    }
}
exports.default = new App().app;
