const session = require("express-session");

const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET, // pour générer des SID (clé de session) difficile à deviner
    resave: false, // ne pas ré-enregistrer la session à chaque requête si rien n'a changé dans la session
    saveUninitialized: true, // créer une session même si on ne stock rien de particulier dedans
    cookie: { secure: false, maxAge: 1000 * 60 * 60 }, // secure false tant qu'on est en HTTP // durée du cookie = 1h ===> lorsqu'on se loggin, on sera connecté 1h, pas plus !
});
// Que fait ce middleware ?

// ==== Imaginons qu'on visite le site pour la première fois ! ===
// Le client n'envoie pas de cookie puisque c'est la première visite.
// Le serveur voit passer une requête sans cookie ==> "tiens !? un nouveau visiteur !!!"
// Le serveur créé une boite (une session), génère la clé de la session (SID = Session ID)
// Le serveur met cette clé (SID) dans les headers de la réponses (Set-Cookie) : pour dire au client de stocker le SID dans ces cookies !
// On appelle next();

// ==== Imaginons qu'on visite le site pour la deuxieme fois ! ===
// Le client envoie le cookie (car les cookies s'envoient systématiquement dans les requête HTTP, naturellement)
// Le serveur voit : tiens, y'a un cookie dans le requête ! avec le SID !
// Le serveur retrouve donc (dans la RAM) la session (= la boite), et la met dans req.session !
// Puis appelle next();
// => Bilan, les middlewares / controlleurs suivants ont accès à une variable 'req.session' qui correspnd donc à ce que le visiteur a stocké !


module.exports = sessionMiddleware;
