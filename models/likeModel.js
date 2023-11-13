import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Like = sequelize.define("like", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export {Like};