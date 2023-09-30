import { Sequelize } from "sequelize";
import { sequelize } from "../util/dbconfig.js";

export const Info=sequelize.define("library",{
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


})

