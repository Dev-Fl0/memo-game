require("dotenv").config();

const { Sequelize } = require("sequelize");
const { update } = require("./User");

// Créer un client Postgres ET le connecte dans la foulée !
const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        createdAt: "created_at", // Mapping createdaAt -> created_at pour TOUS les modèles !
        updatedAt: "updated_at"
    },
    logging: false // Pour empêcher Sequelize de logger toutes nos requêtes SQL qu'il passe à la BDD
});


// Option, on peut tester la connexion juste pour voir
// sequelize.authenticate()
//   .then(() => { console.log('Connection has been established successfully.'); })
//   .catch((error) => { console.error('Unable to connect to the database:', error); });

// On exporte ce client de BDD
module.exports = sequelize;
