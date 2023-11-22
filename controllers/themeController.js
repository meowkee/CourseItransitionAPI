import { Theme } from "../models/themeModel.js";

class ThemeController {
    async getAll(req, res) {
        const themes = await Theme.findAll();
        return res.json(themes);
    }
}

export default new ThemeController();