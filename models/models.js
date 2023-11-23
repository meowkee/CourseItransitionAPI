import { Like } from "./likeModel.js";
import { Comment } from "./commentModel.js";
import { Tag } from "./tagModel.js";
import { Item } from "./itemModel.js";
import { Collection } from "./collectionModel.js";
import { ValueField } from "./valueFieldModel.js";
import { Field } from "./fieldModel.js";
import { User } from "./userModel.js";
import { Theme } from "./themeModel.js";

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Like);
Like.belongsTo(User);

Item.hasMany(Tag);
Tag.belongsTo(Item);

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

Theme.hasMany(Collection);
Collection.belongsTo(Theme);