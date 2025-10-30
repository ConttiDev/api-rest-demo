import { Sequelize } from "sequelize";
import Database from "better-sqlite3";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    dialectModule: Database,
    logging: console.log,
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: false
    }
})