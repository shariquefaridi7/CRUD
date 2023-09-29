import express from "express";
import { delData} from "../controller/delDataController.js";

const router=express.Router();

router.get("/get-data",delData);


export default router;