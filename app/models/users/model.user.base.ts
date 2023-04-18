import { Types, Schema, model, Model } from 'mongoose';

export const USER_CUSTOMER_ROLE = 'USER_CUSTOMER_ROLE';
export const USER_HOST_ROLE = 'USER_HOST_ROLE';
export const USER_ADMIN_ROLE = 'USER_ADMIN_ROLE';

interface UserRoleInterface {
    name: string;
}

export interface BaseUserInterface {
    _id: Types.ObjectId;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    dateOfBirthday?: Date;
    password?: string;
    roles: UserRoleInterface[];
}

const userRoleSchema: Schema = new Schema<UserRoleInterface>({
    name: { type: String, required: true },
});

const baseUserSchema: Schema = new Schema<BaseUserInterface>({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirthday: { type: Date, required: false },
    password: { type: String, required: false, bcrypt: true, select: false },
    roles: [userRoleSchema],
});

export const BaseUser: Model<BaseUserInterface> = model('User', baseUserSchema);
