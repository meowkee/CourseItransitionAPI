import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Tag = sequelize.define("tag", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
});

export {Tag};