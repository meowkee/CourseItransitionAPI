import { Collection } from "../models/collectionModel.js";
import { Field } from "../models/fieldModel.js";

class CollectionController {
    async create(req, res) {
        const { name, description, fields, userId } = req.body;
        const collection = await Collection.create({
            name: name,
            description: description,
            userId: userId,
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

    async getById(req, res) {
        const { id } = req.params;
        const collection = await Collection.findOne({
            where: { id: id },
            include: [{ model: Field, as: "fields" }],
        });
        res.json(collection);
    }
}

export default new CollectionController();
