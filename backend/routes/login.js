import express from "express";
import { signinData,SignupData } from "../controller/loginController.js"

const router=express.Router();

router.post("/signup",SignupData);
router.post("/signin",signinData)

export default router
