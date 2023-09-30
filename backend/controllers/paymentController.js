import Razorpay from "razorpay";
import { Info } from "../models/bookModel.js";
import dotenv from 'dotenv';

dotenv.config();
const razorpayInstance = new Razorpay({
    key_id:process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
}); 

export const createPayment=async(req,res)=>{
    try {
        const amount = req.body.amount*100
        const id=req.body.id;
        const resp=await Info.findByPk(id);
        const name=resp.dataValues.name;
        const options = {
            amount: amount,
            currency: 'INR',
            receipt: 'razorUser@gmail.com'
        }

        razorpayInstance.orders.create(options, 
            (err, order)=>{
                if(!err){
                    res.status(200).send({
                        success:true,
                        msg:'Order Created',
                        order_id:order.id,
                        amount:amount,
                        key_id:process.env.KEY_ID,
                        product_name:name,
                        contact:process.env.NUMBER,
                        name: process.env.NAME,
                        email: process.env.EMAIL
                    });
                }
                else{
                    res.status(400).send({success:false,msg:'Something went wrong!'});
                }
            }
        );

    } catch (error) {
        console.log(error);
   
        res.status(500).json({ message: 'Internal Server Error' });
    }


}