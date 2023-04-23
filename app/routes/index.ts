import { Express } from "express";
import homeRouter from "./home";
import swaggerDoc from "../swagger";
import swaggerUi from "swagger-ui-express";

export default function routes(app: Express) {
    app.use('/', homeRouter);
    app.use(`/api-doc`, swaggerUi.serve, swaggerUi.setup(swaggerDoc))
}
