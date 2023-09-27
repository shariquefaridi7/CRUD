import { Sequelize } from "sequelize";
import { sequelize } from "../util/dbconfig.js";

export const CartItem=sequelize.define("cartitem",{
    id:{
        type:Sequelize.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey:true
    
    },
    quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
  

})