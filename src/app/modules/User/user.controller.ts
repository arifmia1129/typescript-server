import { Request, Response } from "express";
import User from "./user.model";
import { createUserService } from "./user.service";

export const createUser = async (req:Request, res:Response) => {
    try {
        // 4 step to work typescript with mongoose
    /**
     * Interface
     * Schema
     * Model
     * DB Queries
    */

    const user = await createUserService();        

    res.status(201).json({
        success:true,
        message:"Successfully created user",
        user
    })

    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Something broken"
        })
    }
  }

