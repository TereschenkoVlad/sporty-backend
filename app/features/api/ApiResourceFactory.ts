import {ApiResource, IApiResource} from "./ApiResource";
import { API_RESOURCE_FACTORIES } from "../../config/registries/apiResourceFactoriesRegistry";

export interface IApiResourceFactory {
  createSingle(object: object, apiResourceClass: IApiResource): ApiResource;
  createMultiple(objects: object[], apiResourceClass: IApiResource): Array<any>;
  support(object: object, apiResourceClass: IApiResource): boolean;
}

export class ApiResourceFactory {
  async create(subject: object, apiResourceClass: IApiResource): Promise<ApiResource> {
    const factory: IApiResourceFactory | null = this.getApiResourceFactory(subject, apiResourceClass);

    if (factory) {
      return factory.createSingle(subject, apiResourceClass);
    }

    return new ApiResource(subject);
  }

  getApiResourceFactory(subject: object, apiResourceClass: IApiResource): IApiResourceFactory | null
  {
    let suggestedFactory: IApiResourceFactory | null = null;

    API_RESOURCE_FACTORIES.forEach((factory: IApiResourceFactory) => {
      if (factory.support(subject, apiResourceClass)) {
        suggestedFactory = factory;
      }
    });

    return suggestedFactory;
  }
}
