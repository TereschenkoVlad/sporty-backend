import mongoose from "mongoose";
import { Customer } from "./model.user.customer";
import { CustomerUserInterface } from "./model.user.customer";

interface HostUserInterface extends CustomerUserInterface {
}

const hostSchema: mongoose.Schema = new mongoose.Schema<HostUserInterface>({
    // relation to properties
});

export const Host: mongoose.Model<CustomerUserInterface> = Customer.discriminator('Host', hostSchema);
