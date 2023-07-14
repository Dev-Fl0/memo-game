const User = require("./User");
const Card = require("./Card");
const sequelize = require("./sequelize-client");

const dataRequest = {
    async getAllCards() {
        const cards = await Card.findAll({
            attributes: ["name", "img_src"],
            order: sequelize.fn("RANDOM"),
        });
        return cards;
    },

    async getAllCardsMixed() {
        const cardsMixed = await Card.findAll({
            attributes: ["name", "img_src"],
            order: sequelize.fn("RANDOM"),
        });
        return cardsMixed;
    },

    async findUserByPk(userId) {
        const user = await User.findByPk(userId);
        return user;
    },

    async findUser(email) {
        const userWithSameEmail = User.findOne({
            where: { email },
        });
        return userWithSameEmail;
    },

    async createUser(firstname, lastname, email, encryptedPassword) {
        await User.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword,
        });
    },
};

module.exports = dataRequest;
