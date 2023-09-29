import { delPart } from "../model/bodyModel.js";
import { Info } from "../model/libraryModel.js";

export const delData=async(req,res)=>{
 
    const resp=await delPart.findAll({});
    res.send(resp);

}

