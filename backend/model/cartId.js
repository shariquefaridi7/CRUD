import { Sequelize } from "sequelize";
import { sequelize } from "../util/dbconfig.js";

export const cartId=sequelize.define("cartId",{
    id:{
        type:Sequelize.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey:true
    
    }
})