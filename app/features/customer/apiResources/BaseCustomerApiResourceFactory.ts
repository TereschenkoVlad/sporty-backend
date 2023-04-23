import {IApiResourceFactory} from "../../api/ApiResourceFactory";
import {ApiResource, IApiResource} from "../../api/ApiResource";
import { Customer } from "../../../models/users/model.user.customer";
import BaseCustomerApiResource from "./BaseCustomerApiResource";

export class BaseCustomerApiResourceFactory implements IApiResourceFactory {
  createSingle(object: Customer): ApiResource {
    return new ApiResource(this.createApiResource(object));
  }

  createMultiple(objects: object[]): BaseCustomerApiResource[] {
    const resources: BaseCustomerApiResource[] = [];

    objects.forEach(object => {
      resources.push(this.createApiResource(object));
    });

    return resources;
  }

  support(object: object, apiResourceClass: IApiResource): boolean {
    return object instanceof Customer && apiResourceClass === BaseCustomerApiResource;
  }

  createApiResource(object: Customer): BaseCustomerApiResource {
    return new BaseCustomerApiResource(
      object.firstName,
      object.lastName,
      object.email,
      object.phoneNumber
    );
  }
}
