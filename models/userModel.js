import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import { statuses } from "../consts/statuses.js";
import { roles } from "../consts/roles.js";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: roles.user },
    status: { type: DataTypes.STRING, defaultValue: statuses.active },
});

export {User};