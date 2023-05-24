import express, { Application,Request, Response, urlencoded } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app:Application = express();

// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(urlencoded({extended:true}));

app.get('/', (req:Request, res:Response) => {
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
            required:true
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
  })


export default app;