const { DataTypes } = require('sequelize');
const sequelize = require('../util/database/db');

const PostAttribute = sequelize.define(
  'post_attributes',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    attribute_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    attribute_value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'post_attributes',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }]
      }
    ]
  }
);

module.exports = PostAttribute;
