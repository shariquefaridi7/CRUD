import express from "express";
import { AddProduct ,GetProduct} from "../controller/adminContrller.js";

const router=express.Router();

router.post("/add-product",AddProduct);
router.get("/add-product",GetProduct)

export default router