import User from "./user.model"

export const createUserService = async ()=>{
    const user = new User({
        id:"1122",
        name:{
            firstName:"AB",
            lastName:"AB"
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

    await user.save();

    return user;
}