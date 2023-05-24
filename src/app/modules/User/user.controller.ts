import { Request, Response } from 'express';
import User from './user.model';
import { createUserService, getAdminUserService, getUserByIdService, getUserService } from './user.service';
import { IUser } from './user.interface';

export const createUser = async (req: Request, res: Response) => {
  try {
    // 4 step to work typescript with mongoose
    /**
     * Interface
     * Schema
     * Model
     * DB Queries
     */

    const userInfo: IUser = req.body;

    const user = await createUserService(userInfo);
    

    res.status(201).json({
      success: true,
      message: 'Successfully created user',
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Something broken',
    });
  }
};


export const getUser = async (req:Request, res:Response) => {
    try {
        const users:IUser[]|[] = await getUserService();

        if(!users.length){
           return res.status(200).json({
                success:false,
                message:"Could'nt get users"
            })
        }

        res.status(200).json({
            success:true,
            message:"Successfully get users", 
            users
        })
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Something broken"
        })
    }
}


export const getAdminUser = async (req:Request, res:Response) => {
    try {
        const users = await getAdminUserService();

        res.status(200).json({
            success:true,
            message:"Successfully get users", 
            users
        })
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Something broken"
        })
    }
}


export const getUserById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;

        const user:IUser|null = await getUserByIdService(id);

        if(!user){
           return res.status(200).json({
                success:false,
                message:"Could'nt get user"
            })
        }

        res.status(200).json({
            success:true,
            message:"Successfully get user", 
            user
        })
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Something broken"
        })
    }
}