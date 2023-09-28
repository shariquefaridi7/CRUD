import db from "../models/index.js";
const Blog=db.blogInfo;



export const createBlog= async(req,res)=>{
    const {author,title,content}=req.body;
    try {
        const data=await Blog.create({author,title,content});
        res.status(201).json("adding scuccessfully..");
        
    } catch (error) {
         console.log(error);
    }

}

export const getBlog= async(req,res)=>{
   
    try {
        const data=await Blog.findAll({});
        res.status(201).json(data);
        
    } catch (error) {
         console.log(error);
    }

}