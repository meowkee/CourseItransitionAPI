const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const idParameters = {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
};

const User = sequelize.define("user", {
    id: idParameters,
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
    status: {type: DataTypes.STRING, defaultValue: "ACTIVE" }
});

const Comment = sequelize.define("comment", {
    id: idParameters,
    text: { type: DataTypes.TEXT },
});

const Like = sequelize.define("like", {
    id: idParameters,
});

const Tag = sequelize.define("tag", {
    id: idParameters,
    name: { type: DataTypes.STRING },
});

const ItemTag = sequelize.define("itemtag", {
    id: idParameters,
});

const Item = sequelize.define("item", {
    id: idParameters,
    name: { type: DataTypes.STRING },
});

const Collection = sequelize.define("collection", {
    id: idParameters,
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
});

const Field = sequelize.define("field", {
    id: idParameters,
    name: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
});

const ValueField = sequelize.define("valuefield", {
    id: idParameters,
    value: { type: DataTypes.TEXT },
});

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

Field.hasMany(ValueField);
ValueField.belongsTo(Field);

module.exports = {
    User,
    Field,
    ValueField,
    Collection,
    Item,
    ItemTag,
    Comment,
    Like,
    Tag
};
