import express, { Express, Request, Response } from 'express';
import routes from "../routes";
const config = require('../config');

export default class ExpressLoader {
    app: Express;
    port: string;

    constructor() {
        this.app = express();
        this.port = config.app.port;
    }

    start() {
        routes(this.app);

        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}
