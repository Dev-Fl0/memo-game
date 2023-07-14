const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const dataRequest = require("../models/test");

const userAuthController = {
    renderSignupPage(request, response) {
        response.render("signup");
    },

    renderLoginPage(request, response) {
        response.render("login");
    },

    async signupAndRedirect(request, response) {
        const { firstname, lastname, email, password, confirmation } =
            request.body;

        if (!firstname || !lastname || !email || !password || !confirmation) {
            return response
                .status(400)
                .render("signup", {
                    errorMessage: "Merci de renseigner tous les champs.",
                });
        }

        if (!emailValidator.validate(email)) {
            return response
                .status(400)
                .render("signup", {
                    errorMessage: "Vérifier le format de l'email.",
                });
        }

        const userWithSameEmail = await dataRequest.findUser(email);
        if (userWithSameEmail) {
            return response
                .status(409)
                .render("signup", {
                    errorMessage: "Cet email est déjà utilisé.",
                });
        }

        if (password !== confirmation) {
            return response.status(400).render("signup", { errorMessage: "Le mot de passe et sa confirmation ne correspondent pas." });
        }

        if (password.length < 8) {
            return response.status(400).render("signup", { errorMessage: "Veuillez choisir un mot de passe de plus de 8 caractères." });
        }

        const nbOfSaltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
        const encryptedPassword = await bcrypt.hash(password, nbOfSaltRounds);

        await dataRequest.createUser(firstname, lastname, email, encryptedPassword);
        response.redirect("/login");
    },

    async loginAndRedirect (request, response) {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).render("login", { errorMessage: "Veuillez renseiger votre email et votre mot de passe." });
        }

        const user = await dataRequest.findUser(email);

        if (!user) {
            return response.status(400).render("login", { errorMessage: "L'email ou le mot de passe est incorrect." });
        }

        const isMatching = await bcrypt.compare(password, user.password);

        if (!isMatching) {
            return response.status(400).render("login", { errorMessage: "L'email ou le mot de passe est incorrect."});
        }
        console.log(request.session.userId);
        request.session.userId = user.id;

        response.redirect("/");
    },

    async logoutAndRedirect(request, response) {
        request.session.userId = null;
        response.redirect("/");
    },

    isAuthed(request, response, next) {
        if (!request.session.userId) {
            response.redirect("/login");
        } else {
            next();
        }
    },

};

module.exports = userAuthController;
