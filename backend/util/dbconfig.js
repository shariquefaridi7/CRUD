import { Sequelize } from "sequelize";

export const sequelize=new Sequelize("e-com","root","S7505606262s",{
    host:"localhost",
    dialect:"mysql"
})