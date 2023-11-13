import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Comment = sequelize.define("comment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.TEXT },
});

export {Comment};