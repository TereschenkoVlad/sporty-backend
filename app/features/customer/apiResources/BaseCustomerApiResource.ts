import {IApiResource} from "../../api/ApiResource";

export default class BaseCustomerApiResource implements IApiResource {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phoneNumber: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
