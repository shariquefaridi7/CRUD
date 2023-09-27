import { Sequelize } from "sequelize";
import { sequelize } from "../util/dbconfig.js";

export const loginDetail=sequelize.define("loginDetail",{
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
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})