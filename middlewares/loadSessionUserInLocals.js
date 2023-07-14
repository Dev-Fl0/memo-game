const { User } = require("../models");

const loadSessionUserInLocals = async (req, res, next) => {
    // console.log(req.session); // On peux ainsi observer la session qui est dans la RAM du serveur !

    if (req.session.userId) {
        // Si il y a un userId, ça veut dire que le visiteur est CONNECTÉ !!
        const user = await User.findByPk(req.session.userId);
        res.locals.user = user; // J'ajoute cet utilisateur dans les locals ! // => plutôt à destination des views EJS
        req.user = user; // On stock régulièrement le user dans `req` ==> pour les middlewares suivants.
    }

    next(); // Appelle la suite, donc le router
};

module.exports = loadSessionUserInLocals;
