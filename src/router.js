const { Router } = require("express");
const mainController = require("./controllers/mainController");
const gameController = require("./controllers/gameController");
const userAuthController = require("./controllers/userAuthController");

const middleware404 = require("./middlewares/middleware404");

const router = Router();

// Configure regular routes
router.get("/", mainController.getHomePage);
router.get("/game", gameController.getGamePage);

// Configure Authentified user routes

// Register
router.get("/signup", userAuthController.renderSignupPage);
router.post("/signup", userAuthController.signupAndRedirect);

// Connect
router.get("/login" , userAuthController.renderLoginPage);
router.post("/login" , userAuthController.loginAndRedirect);

// Logout
router.get("/logout", userAuthController.isAuthed, userAuthController.logoutAndRedirect);

// Middleware
router.use(middleware404);

module.exports = router;
