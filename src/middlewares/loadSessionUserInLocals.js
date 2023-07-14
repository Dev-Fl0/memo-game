const dataRequest = require("../models/test");


const loadSessionUserInLocals = async (request, response, next) => {
    // console.log(req.session); // On peux ainsi observer la session qui est dans la RAM du serveur !

    if (request.session.userId) {
        // Si il y a un userId, ça veut dire que le visiteur est CONNECTÉ !!
        const user = await dataRequest.findUserByPk(request.session.userId);
        response.locals.user = user; // J'ajoute cet utilisateur dans les locals ! // => plutôt à destination des views EJS
        request.user = user; // On stock régulièrement le user dans `req` ==> pour les middlewares suivants.
    }

    next(); // Appelle la suite, donc le router
};

module.exports = loadSessionUserInLocals;
