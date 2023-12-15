import { DB_NAME,DB_USER,DB_PASSWORD,DB_HOST,DB_DIALECT } from "../configs/configs.js";
import { Sequelize } from "sequelize";

const db = new Sequelize('campeonatos','postgres','7948',{
    host:'localhost',
    dialect:DB_DIALECT
});

export default db;