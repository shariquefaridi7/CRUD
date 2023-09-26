import { Information } from "../model/formModel.js";

export const post=async(req,res)=>{
   const {name,phone}=req.body;
   const resp=await Information.create({name,phone})
   console.log(resp);
   res.send("POST")
}

export const get=async(req,res)=>{
 
    let info=await Information.findAll({});
    res.send(info)
}

export const del=async(req,res)=>{
          const id=req.params.id;
    
         await Information.destroy({where :{id:id},});
          res.status(200).send("Delete successful")
}

