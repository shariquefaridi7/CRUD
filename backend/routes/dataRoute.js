import express from "express";
import { post } from "../controller/dataController.js";
import { get } from "../controller/dataController.js";


const router =express.Router();

router.post("/post-data",post);

router.get("/get-data",get);



export default router;