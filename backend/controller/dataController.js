import { Info } from "../model/libraryModel.js";
import { delPart } from "../model/bodyModel.js";

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

export const del=async(req,res)=>{
   
    let id=req.params.id;
    let wallet=req.params.wallet
    const resp=await Info.findByPk(id);
    console.log(resp.dataValues.name);
    const name=resp.dataValues.name;
       await delPart.create({name,wallet})
        await Info.destroy({where:{id}});
      res.send("delete");

}
