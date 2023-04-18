import { Express } from "express";
import homeRouter from "./home";

export default function routes(app: Express) {
    app.use('/', homeRouter);
}
