import { delPart } from "../models/returnBookModel.js";


export const getBody=async(req,res)=>{
 
    const resp=await delPart.findAll({});
    res.send(resp);

}
export const delBody=async(req,res)=>{
const id=req.params.id;
    await delPart.destroy({where :{id}});
 res.send("data delete");


}

