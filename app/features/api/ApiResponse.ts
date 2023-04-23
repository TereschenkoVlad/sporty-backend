import { Request, Response } from "express";
import {IApiResource} from "./ApiResource";
import { ApiResourceFactory } from "./ApiResourceFactory";

export default class ApiResponse {
  private request: Request;
  private response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  async sendResponse(data: any | object, message: string, apiResourceClass: IApiResource | null = null ) {

    if (apiResourceClass) {
      data = await (new ApiResourceFactory()).create(data, apiResourceClass);
    }

    this.response.send({
      status: "success",
      message,
      data,
    });
  }
}