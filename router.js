const { Router } = require("express");
const mainController = require("./controllers/mainController");
const gameController = require("./controllers/gameController");

const middleware404 = require("./middlewares/middleware404");

const router = Router();

// Configure regular routes
router.get("/", mainController.getHomePage);
router.get("/game", gameController.getGamePage);

// Middleware
router.use(middleware404);

module.exports = router;
