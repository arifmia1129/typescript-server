import {Router} from "express";
import { createUser } from "./user.controller";


const router = Router();

router.get("/create",createUser)

export default router;