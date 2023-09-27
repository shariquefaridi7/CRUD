import { Product } from "../model/adminModel.js";

export const AddProduct=async(req,res)=>{

      const {name,price,description,image}=req.body;
 
      const resp=await Product.create({name,price,description,image});
      res.send(resp)

}

export const GetProduct=async(req,res)=>{

   
    const resp=await Product.findAll({});
    res.send(resp)

}