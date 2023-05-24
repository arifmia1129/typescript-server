import {Router} from "express";
import { createUser, getUser } from "./user.controller";


const router = Router();

router.get("/",getUser);
router.post("/create",createUser);


export default router;