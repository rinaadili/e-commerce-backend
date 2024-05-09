import express from 'express';
import cors from 'cors';
import {Express} from 'express';
import bodyParser from './middlewares/bodyParser';
import badRoute from "./middlewares/badRoute";
import router from './routes';

declare global {
    namespace Express {
        interface Request {
            data: string
            user: object
        }
    }
}

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.app.use(cors({
            origin: '*',
            methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
            optionsSuccessStatus: 200
        }));
        this.loadBodyParser();
        this.app.use(express.static('uploads'));
        this.loadRoutes();
    }

    private loadBodyParser() {
        bodyParser(this.app);
    }

    private loadRoutes() {
        this.app.use(router);
        badRoute(this.app);
    }
}

export default new App().app;

