const { Collection, Field } = require("../models/models");

class CollectionController {
    async create(req, res) {
        const { name, description, fields } = req.body;
        const collection = await Collection.create({
            name: name,
            description: description,
        });
        const addedFields = await fields.forEach((field) =>
            Field.create({
                collectionId: collection.id,
                name: field.name,
                type: field.type,
            })
        );
        return res.json({ collection: collection, addedFields: addedFields });
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

module.exports = new CollectionController();
