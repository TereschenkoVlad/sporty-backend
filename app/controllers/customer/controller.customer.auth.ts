import { validateData } from "../../utils/validator";
import { ValidationError } from "../../utils/utils.errors";
import { Rules } from "validatorjs";
import { createCustomer } from "../../services/user/service.user.customer";
import ApiResponse from "../../features/api/ApiResponse";
import {BaseCustomerApiResourceFactory} from "../../features/customer/apiResources/BaseCustomerApiResourceFactory";

export const customerRegister = async (req, res, next) => {
    try {
        const rules: Rules = {
            firstName: 'required|min:3|max:40',
            lastName: 'required|min:3|max:40',
            phoneNumber: 'required|telephone',
            email: 'required|email',
        }

        const validationErrors = validateData(req.body, rules)

        if (validationErrors) {
            next(new ValidationError(validationErrors));
            return;
        }

        const { firstName, lastName, email, phoneNumber } = req.body;

        const customer = await createCustomer({
            firstName,
            lastName,
            email,
            phoneNumber,
        });

        await new ApiResponse(req, res).sendResponse(customer, '', BaseCustomerApiResourceFactory);
    } catch (e) {
        next(e)
    }
}