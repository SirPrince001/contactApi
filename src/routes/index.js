

const route = require("express").Router();

route.use(require("./user_routes"));

module.exports = route;
