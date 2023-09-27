import { cartId } from "../model/cartId.js";
import { Product } from "../model/adminModel.js";
import { SignupData } from "./loginController.js";
export const AddCart=async(req,res)=>{
     
     const id=req.params.id;
   const cart=cartId.findByPk(1);
   console.log(cart)
   const product=await cart.createCartItem();
     let resp=await product.findByPk(id);
     resp.createCartItem();
 
  


}