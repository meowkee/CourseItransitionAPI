import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const ItemTag = sequelize.define("itemtag", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

export {ItemTag};