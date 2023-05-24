// interface
export interface IUser{
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