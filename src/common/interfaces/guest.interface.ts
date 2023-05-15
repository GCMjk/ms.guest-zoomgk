import { IUser } from "@common/interfaces/user.interface";

export interface IGuest extends Document {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    confirmed: boolean;
    confirmationToken: string | undefined;
    userID: IUser;
    available: boolean;
}