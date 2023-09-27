import express from 'express';
import cors from 'cors';
import routerLogin from './routes/login.js';
import routerAdmin from './routes/admin.js';
import routerCart from "./routes/cart.js";
import { sequelize } from './util/dbconfig.js';
import { cartId } from './model/cartId.js';
import { CartItem } from './model/cartItem.js';
import { Product } from './model/adminModel.js';
import { loginDetail } from './model/loginModel.js';


const app=express();
const PORT=4000;

// middleware 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



// routes

app.use("/",routerLogin);
app.use("/admin",routerAdmin);
app.use("/cart",routerCart);

//realation between cartId and Logindetail with one-many relation

loginDetail.hasOne(cartId);
cartId.belongsTo(loginDetail);


//realation between cartId and Product with many-many relation

cartId.belongsToMany(Product,{through:CartItem});
Product.belongsToMany(cartId,{through:CartItem});



//connect db
sequelize.sync().then(()=>console.log("db connect")).catch((err)=>console.log(err));

//connect to server

app.listen(PORT,()=>{
    console.log(`server start at PORT:${PORT}`);
})


