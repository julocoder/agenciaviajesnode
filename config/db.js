import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operators: false
});

export default db;
