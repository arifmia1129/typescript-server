import { IUser } from "./user.interface";
import User from "./user.model"

export const createUserService = async (userPayload:IUser):Promise<IUser>=>{
    const user = new User(userPayload);

    await user.save();

    return user;
}

export const getUserService = async ():Promise<IUser[]|[]> => {
    const users = await User.find();
    return users;
}