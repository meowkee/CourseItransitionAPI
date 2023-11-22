import { Collection } from "../models/collectionModel.js";
import { Field } from "../models/fieldModel.js";
import { Theme } from "../models/themeModel.js";
import { User } from "../models/userModel.js";

class CollectionController {
    async create(req, res) {
        const { name, description, fields, userId, themeId } = req.body;
        const collection = await Collection.create({
            name: name,
            description: description,
            userId: userId,
            themeId: themeId,
        });
        await fields.forEach((field) =>
            Field.create({
                collectionId: collection.id,
                name: field.name,
                type: field.type,
            })
        );
        return res.json({ collection: collection });
    }

    async getByUserId(req, res) {
        const { id } = req.params;
        const collections = await Collection.findAll({
            where: { userId: id },
            include: [{ model: Field, as: "fields" }, {model: Theme, as: "theme" }, {model: User, as: "user" }],
        });
        res.json(collections);
    }

    async getById(req, res) {
        const { id } = req.params;
        const collection = await Collection.findOne({
            where: { id: id },
            include: [{ model: Field, as: "fields" }, {model: Theme, as: "theme" }, {model: User, as: "user" }],
        });
        res.json(collection);
    }

    async deleteById(req, res) {
        const { id } = req.params;
        await Collection.destroy({ where: { id: id } });
        return res.json("Collection deleted successfully");
    }
}

export default new CollectionController();
