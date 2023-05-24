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

export const getUserByIdService = async (id:string):Promise<IUser | null> => {
    const user = await User.findOne({id}, {name:1, email:1, contactNo:1, emergencyContactNo:1});
    return user;
}