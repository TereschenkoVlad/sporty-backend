import mongoose from "mongoose";
import { BaseUser, BaseUserInterface } from "./model.user.base";
import AddressInterface from "../../common/interfaces/AddressInterface";

export const CUSTOMER_ACTIVE_STATUS = 1;
export const CUSTOMER_REGISTERED_STATE_FLOW = 1;

export interface CustomerUserInterface extends BaseUserInterface {
    address?: AddressInterface;
    gender?: number;
    status: number;
    stateFlow: number;
    avatar?: mongoose.Types.ObjectId;
}

const addressSchema: mongoose.Schema = new mongoose.Schema<AddressInterface>({
    address: {
        country: { type: String, required: true, },
        state: { type: String, required: false, },
        city: { type: String, required: true, },
        address: { type: String, required: false, },
    }
});

const customerSchema: mongoose.Schema = new mongoose.Schema<CustomerUserInterface>({
    address: addressSchema,
    gender: { type: Number, },
    status: { type: Number, required: true, },
    stateFlow: { type: Number, required: true, },
    avatar: { type: mongoose.Types.ObjectId, required: false },
});

export const Customer: mongoose.Model<CustomerUserInterface> = BaseUser.discriminator('Customer', customerSchema);
