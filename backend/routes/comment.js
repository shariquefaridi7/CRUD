import express from "express";
import { createComment,getComment,deleteComment} from "../controllers/comment.js";

const router =express.Router();


router.post("/create",createComment);
router.get("/",getComment);
router.delete("/delete/:id",deleteComment);


export default router;