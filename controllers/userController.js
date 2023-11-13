import ApiError from "../error/ApiError.js";
import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const generateJwt = (name, email, role) => {
    return jwt.sign({ name, email, role }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
};

class UserController {
    async registration(req, res, next) {
        const { name, email, password, role } = req.body;
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
        const hashPassword = bcrypt.hashSync(password, salt);
        try {
            const user = await User.create({
                name,
                email,
                role,
                password: hashPassword,
            });
            const token = generateJwt(user.name, user.email, user.role);
            return res.json({ token });
        } catch (error) {
            return next(
                ApiError.badRequest(`User with ${email} already exists`)
            );
        }
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return next(
                ApiError.internal("User not found or password mismatch")
            );
        }
        if (user.status === "BLOCKED") {
            return next(ApiError.internal("User is blocked"));
        }
        const token = generateJwt(user.name, user.email, user.role);
        return res.json({ token });
    }

    async checkAuthorization(req, res) {
        const token = generateJwt(req.user.name, req.user.email, req.user.role);
        return res.json({ token });
    }
}

export default new UserController();