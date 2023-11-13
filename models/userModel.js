import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    status: { type: DataTypes.STRING, defaultValue: "ACTIVE" },
});

export {User};