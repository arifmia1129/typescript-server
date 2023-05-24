import express, { Application,Request, Response, urlencoded } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app:Application = express();

// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(urlencoded({extended:true}));

app.get('/',async (req:Request, res:Response) => {
    try {
        // 4 step to work typescript with mongoose
    /**
     * Interface
     * Schema
     * Model
     * DB Queries
    */

    // interface
    interface IUser{
        id:string;
        name:{
            firstName:string;
            lastName:string;
        },
        role:"student";
        class:string;
        dob:string;
        gender:"male"|"female";
        password:string;
        email?:string;
        contactNo:string;
        emergencyContactNo:string;
        presentAddress:string;
        permanentAddress:string;
    };


    // Schema

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

    const user = new User({
        id:"124",
        name:{
            firstName:"Mst. Binu",
            lastName:"Khatun"
        },
        role:"student",
        class:"five",
        dob:"10/10/2008",
        gender:"female",
        password:"binu123",
        email:"binu@gmail.com",
        contactNo:"01849676331",
        emergencyContactNo:"01713749534",
        presentAddress:"Gobindaganj, Gaibandha",
        permanentAddress:"Gobindaganj, Gaibandha"
    })

    try {
        await user.save();

    res.status(201).json({
        success:true,
        message:"Successfully created user",
        userInfo:{
            id:user?.id,
            name:`${user?.name?.firstName} ${user?.name?.lastName}`
        }
    })
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Couldn't create user",
            error:error?.message
        })
    }

    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Something broken"
        })
    }
  })


export default app;