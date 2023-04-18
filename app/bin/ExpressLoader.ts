import express, { Express } from 'express';
import routes from "../routes";
import config from "./../config";
import { connect } from "../database/db";

export default class ExpressLoader {
    app: Express;
    port: string;

    constructor() {
        this.app = express();
        this.port = config.app.port;
    }

    start() {
        routes(this.app);

        this.app.listen(this.port, async () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);

            await connect();
        });
    }
}
