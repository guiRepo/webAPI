require("dotenv").config();

import sequelize from "sequelize";

const db  = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST
    }
)

export default db;
