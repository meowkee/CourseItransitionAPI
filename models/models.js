import { Like } from "./likeModel.js";
import { Comment } from "./commentModel.js";
import { Tag } from "./tagModel.js";
import { Item } from "./itemModel.js";
import { ItemTag } from "./itemTagModel.js";
import { Collection } from "./collectionModel.js";
import { ValueField } from "./valueFieldModel.js";
import { Field } from "./fieldModel.js";
import { User } from "./userModel.js";

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Like);
Like.belongsTo(User);

Tag.hasMany(ItemTag);
ItemTag.belongsTo(Tag);

Item.hasMany(ItemTag);
ItemTag.belongsTo(Item);

Item.hasMany(Comment);
Comment.belongsTo(Item);

Item.hasMany(Like);
Like.belongsTo(Item);

Collection.hasMany(Item);
Item.belongsTo(Collection);

Collection.hasMany(ValueField);
ValueField.belongsTo(Collection);

Collection.hasMany(Field);
Field.belongsTo(Collection);

Item.hasMany(ValueField);
ValueField.belongsTo(Item);

Field.hasMany(ValueField);
ValueField.belongsTo(Field);

User.hasMany(Collection);
Collection.belongsTo(User);
