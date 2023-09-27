import express from "express";
import { AddCart } from "../controller/cartController.js"

const router=express.Router();

router.post("/add-cart/:id",AddCart);
//router.get("/add-cart",GetCart)

export default router