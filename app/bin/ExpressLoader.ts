import express, { Express, Request, Response } from 'express';
const config = require('../config');

class ExpressLoader {
    app: Express;
    port: string;

    constructor() {
        this.app = express();
        this.port = config.app.port;
    }

    start() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('🏠 Home, sweet home ...');
        });

        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}

module.exports = ExpressLoader;
