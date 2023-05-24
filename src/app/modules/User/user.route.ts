import {Router} from "express";
import { createUser, getAdminUser, getUser, getUserById } from "./user.controller";


const router = Router();

router.get("/",getUser);
router.get("/admin",getAdminUser);
router.get("/:id",getUserById);
router.post("/create",createUser);


export default router;