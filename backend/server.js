import express from 'express';
import cors from 'cors';
import router from './routes/dataRoute.js';
import { sequelize } from './util/dbconfig.js';
import delRouter from "./routes/delDataRoute.js"


const app=express();
const PORT=4000;
// middleware 

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

// routes

app.use("/",router);
app.use("/delPart",delRouter);

//connect db
sequelize.sync().then(()=>console.log("db connect")).catch((err)=>console.log(err));

//connect to server

app.listen(PORT,()=>{
    console.log(`server start at PORT:${PORT}`);
})


