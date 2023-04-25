"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {

    static associate(models) {
      Size.belongsToMany(models.Item,{foreignKey: "sizeId", through: models.ItemSize, as: "sizeItem"});
    }
  }
  Size.init(
    {
      size: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Size",
    }
  );
  return Size;
};
