import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Item = sequelize.define("item", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
});

export {Item};