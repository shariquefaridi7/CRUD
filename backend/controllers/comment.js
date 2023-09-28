import db from "../models/index.js";
const Comment=db.commnetInfo;



export const createComment= async(req,res)=>{
    const {comment}=req.body;
    try {
        const data=await Comment.create({comment});
        res.status(201).json("adding scuccessfully..");
        
    } catch (error) {
         console.log(error);
    }

}

export const getComment= async(req,res)=>{
   
    try {
        const data=await Comment.findAll({});
        res.status(201).json(data);
        
    } catch (error) {
         console.log(error);
    }

}


export const deleteComment= async(req,res)=>{
    const {id }=req.params;
      
    await Comment.destroy({where:{id:id}});
    res.status(200).json("deleted Successfully...")
    
    }