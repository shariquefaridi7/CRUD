
import { loginDetail } from "../model/loginModel.js";

export const SignupData=async(req,res)=>{

    const {name,email}=req.body;
    const resp=await loginDetail.create({name,email});
    req.user=resp;
    resp.createCartId();
    console.log(resp);
    res.send(resp);
 

}
export const signinData=async(req,res)=>{
    const {name,email}=req.body;
    const resp=await loginDetail.findOne({where:{name}});
    req.user=resp;
    const info= await resp.getCartIds();
    console.log(info)
    res.send(info);

}