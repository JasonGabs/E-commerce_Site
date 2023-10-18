// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// product in in category
Product.belongsTo(Category, { foreignKey: "category_id" });
// category can have many products
Category.hasMany(Product, { foreignKey: "category_id" });
// product has many tags
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });
// tags can have many products
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};