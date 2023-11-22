import { Item } from "../models/itemModel.js";
import { Tag } from "../models/tagModel.js";
import { ItemTag } from "../models/itemTagModel.js";
import { ValueField } from "../models/valueFieldModel.js";

class ItemController {
    async create(req, res) {
        const { name, tags, fields, collectionId } = req.body;
        const item = await Item.create({
            name: name,
            collectionId: collectionId,
        });
        await tags.forEach((tag) =>
            Tag.create({ name: tag.name, itemId: item.id })
        );
        await fields.forEach((field) =>
            ValueField.create({
                collectionId: collectionId,
                value: field.value,
                fieldId: field.fieldId,
                itemId: item.id,
            })
        );
        return res.json({ item });
    }

    async getAll(req, res) {
        const { id } = req.params;
        const items = await Item.findAll({
            where: { collectionId: id },
            include: [
                { model: ValueField, as: "valuefields" },
                { model: Tag, as: "tags" },
            ],
        });
        return res.json(items);
    }
}

export default new ItemController();
