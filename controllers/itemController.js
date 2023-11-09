const { Item, Tag, ValueField } = require("../models/models");

class ItemController {
    async create(req, res) {
        const { name, tags, fields, collectionId } = req.body;
        const item = await Item.create({
            name: name,
            collectionId: collectionId,
        });
        await tags.forEach((tag) => Tag.create({ name: tag.name }));
        await fields.forEach((field) =>
            ValueField.create({
                collectionId: collectionId,
                value: field.value,
                fieldId: field.fieldId,
                itemId: item.id
            })
        );
        return res.json({ item });
    }

    async getAll(req, res) {
        const { id } = req.params;
        const items = await Item.findAll({
            where: { collectionId: id },
            include: [{ model: ValueField, as: "valuefields" }],
        });
        return res.json({ items });
    }
}

module.exports = new ItemController();
