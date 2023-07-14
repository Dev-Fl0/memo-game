const dataRequest = require("../models/test");

const gameController = {

    async getGamePage (request, response) {
        const cards = await dataRequest.getAllCards();
        const cardsMixed = await dataRequest.getAllCardsMixed();
        const cardTurnOff = "/images/carte.png";
        response.render("game", { cards, cardsMixed, cardTurnOff });
    }

};

module.exports = gameController;
