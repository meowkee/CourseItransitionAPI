import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Theme = sequelize.define("theme", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
});

export { Theme };
