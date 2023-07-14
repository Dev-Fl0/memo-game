const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class Card extends Model {}

Card.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_src: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "card",
    }
);

module.exports = Card;
