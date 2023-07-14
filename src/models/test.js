const User = require("./User");
const Card = require("./Card");
const sequelize = require("./sequelize-client");

const dataRequest = {
    async getAllCards() {
        const cards = await Card.findAll({
            attributes: ["name", "img_src"],
            order: sequelize.fn('RANDOM')
        });
        return cards;
    },

    async getAllCardsMixed() {
        const cardsMixed = await Card.findAll({
            attributes: ["name", "img_src"],
            order: sequelize.fn('RANDOM')
        });
        return cardsMixed;
    }
};

module.exports = dataRequest;
