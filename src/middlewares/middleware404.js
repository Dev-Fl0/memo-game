const middleware404 = (request, response) => {
    response.status(404).render("404");
};

module.exports = middleware404;
