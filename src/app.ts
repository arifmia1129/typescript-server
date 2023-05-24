import express, { Application,Request, Response, urlencoded } from "express";
import cors from "cors";
import userRoute from "./app/modules/User/user.route";

const app:Application = express();

// cors
app.use(cors());

// parse data
app.use(express.json());
app.use(urlencoded({extended:true}));

app.use("/api/v1/user", userRoute);

app.get('/',(req:Request, res:Response)=> {
    res.status(200).json({
        success:true,
        message:"Server is running successfully"
    })
})


export default app;