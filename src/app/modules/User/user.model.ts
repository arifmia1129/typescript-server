import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

 const userSchema =new Schema<IUser, UserModel, IUserMethods>({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        required:true,
        enum:["student", "admin"]
    },
    class:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male", "female"]
    },
    password:{
        type:String,
        required:true
    },
    email:String,
    contactNo:{
        type:String,
        required:true
    },
    emergencyContactNo:{
        type:String,
        required:true
    },
    presentAddress:{
        type:String,
        required:true
    },
    permanentAddress:{
        type:String,
        required:true
    }
})

userSchema.method("fullName", function fullName():string {
    return this.name.firstName + this.name.lastName;
})

userSchema.static('getAdminUser',async function getAdminUser():Promise<IUser[]|[]> {
    return await this.find({role:"admin"});
});

const User = model<IUser,UserModel>("User", userSchema);

export default User;