import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ValueField = sequelize.define("valuefield", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    value: { type: DataTypes.TEXT },
});

export {ValueField};