import { Info } from "../model/libraryModel.js";

export const post=async(req,res)=>{
   const {name}=req.body;
   const resp=await Info.create({name})
   console.log(resp);
   res.send("POST")
}

export const get=async(req,res)=>{
 
    let info=await Info.findAll({});
    res.send(info)
}

