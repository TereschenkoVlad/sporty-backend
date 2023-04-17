import express, { Express, Request, Response } from 'express';
import dotenv, { DotenvConfigOutput } from 'dotenv';

class ExpressLoader {
    config: DotenvConfigOutput;
    app: Express;
    port: string;

    constructor() {
        this.config = dotenv.config();
        this.app = express();
        this.port = process.env.PORT;
    }

    start() {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Express + TypeScript Server');
        });

        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}

module.exports = ExpressLoader;
