import express from 'express';
import cors from 'cors';
import router from './routes/bookRoute.js';
import { sequelize } from './util/dbconfig.js';
import delRouter from "./routes/returnBookRoute.js"
import paymentRouter from "./routes/paymentRoute.js"


const app=express();
const PORT=4000;
// middleware 

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// routes

app.use("/",router);
app.use("/",delRouter);
app.use("/payment",paymentRouter);

//connect db
sequelize.sync().then(()=>console.log("db connect")).catch((err)=>console.log(err));

//connect to server

app.listen(PORT,()=>{
    console.log(`server start at PORT:${PORT}`);
})


