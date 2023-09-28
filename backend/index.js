import express from "express";
import cors from "cors";
import blogRouter from "./routes/blog.js";
import commentRouter from "./routes/comment.js";

const app=express();

app.use(express.json());
app.use(cors());

app.use("/post",blogRouter);
app.use("/comment",commentRouter);

app.listen(5003,()=>{
    console.log("server is ruuning in 5003");
});
