import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

export default new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgresql",
        host: process.env.DB_HOST,
        dialectModule: pg,
        dialectOptions: {
            ssl: {
                require: false,
            },
        },
    }
);
