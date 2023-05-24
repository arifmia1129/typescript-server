import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

 const userSchema =new Schema<IUser>({
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
        enum:["student"]
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

const User = model<IUser>("User", userSchema);

export default User;