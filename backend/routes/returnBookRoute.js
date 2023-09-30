import express from "express";
import { getBody,delBody} from "../controllers/returnBookController.js";

const router=express.Router();

router.get("/returnBook-data",getBody);
router.delete("/returnBook-data/:id",delBody);


export default router;