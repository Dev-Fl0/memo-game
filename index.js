// Charger les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

// Importer les dependances
const express = require("express");
const router = require("./src/router");
const sessionMiddleware = require("./src/middlewares/sessionMiddleware");
const loadSessionUserInLocals = require("./src/middlewares/loadSessionUserInLocals");

// Create application
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Serve public folder
app.use(express.static("public"));

// Body parsers
app.use(express.urlencoded({ extended: false }));


// User session
app.use(sessionMiddleware); // En sortie de ce middleware, on a : req.session = { ... }


// Add user info in res.locals (=> for display in header.ejs)
app.use(loadSessionUserInLocals);

// Plug router
app.use(router);

// Start application
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});
