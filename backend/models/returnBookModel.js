import { Sequelize } from "sequelize";
import { sequelize } from "../util/dbconfig.js";

export const delPart=sequelize.define("dellib",{
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
wallet:{
    type:Sequelize.INTEGER,
    allowNull:false
}


})

