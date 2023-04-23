import {
    Customer,
    CUSTOMER_ACTIVE_STATUS,
    CUSTOMER_REGISTERED_STATE_FLOW,
    CustomerUserInterface,
} from "../../models/users/model.user.customer";
import { HydratedDocument } from "mongoose";
import { USER_CUSTOMER_ROLE } from "../../models/users/model.user.base";

interface CreateCustomerData  {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

export const createCustomer = async (data: CreateCustomerData): Promise<Customer>  => {
    const customer: HydratedDocument<CustomerUserInterface> = new Customer({
        ...data,
        status: CUSTOMER_ACTIVE_STATUS,
        stateFlow: CUSTOMER_REGISTERED_STATE_FLOW,
        roles: [{
            name: USER_CUSTOMER_ROLE,
        }],
    });

    return customer.save();
};
