const userRouters = require('../routers/User.Routes');
const express = require('express');
const routes = express.Router();

routes.use('/user', userRouters);
module.exports = routes;
