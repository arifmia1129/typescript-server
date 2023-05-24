import { HydratedDocument, Model } from "mongoose";

// interface
export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  role: 'student';
  class: string;
  dob: string;
  gender: 'male' | 'female';
  password: string;
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  fullName(): string;
}


export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUser(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }
