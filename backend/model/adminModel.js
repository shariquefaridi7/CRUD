import { Sequelize } from "sequelize";
import { sequelize } from "../util/dbconfig.js";

export const Product=sequelize.define("product",{
    id:{
        type:Sequelize.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey:true
    
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    }

})