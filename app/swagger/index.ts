import swaggerJsDoc from "swagger-jsdoc";
import config from "../config";

const swaggerOptions: swaggerJsDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Sporty API",
      version: "1.0.0",
      description: "Documentation of Sporty API",
    },
    host: config.app.hostUrl.replace(/^https?:\/\//, ""),
    servers: [{ url: config.app.apiVersion }],
    components: {
      securitySchemes: {
        bearer: {
          type: "apiKey",
          description: "Value: Bearer {jwt}",
          name: "Authorization",
          in: "header",
          default: "Bearer Token",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["app/**/*.ts"],
}

export default swaggerJsDoc(swaggerOptions);
