import express from "express";
import { post } from "../controllers/bookController.js";
import { get } from "../controllers/bookController.js";
import { del } from "../controllers/bookController.js";


const router =express.Router();

router.post("/Book-Data",post);

router.get("/Book-Data",get);
router.delete("/Book-Data/:id/:wallet",del);



export default router;