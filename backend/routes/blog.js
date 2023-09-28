import express from "express";
import { createBlog ,getBlog} from "../controllers/blog.js";

const router =express.Router();


router.post("/create",createBlog);
router.get("/",getBlog);



export default router;