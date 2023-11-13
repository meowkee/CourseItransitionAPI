import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Field = sequelize.define("field", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
});

export {Field};