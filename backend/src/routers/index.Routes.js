const userRouters = require('../routers/User.Routes');
const vehicleRouters = require('../routers/Vehicle.Routes');
const express = require('express');
const routes = express.Router();

routes.use('/user', userRouters);
routes.use('/vehicle', vehicleRouters);
module.exports = routes;
