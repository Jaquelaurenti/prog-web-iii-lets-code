const userRoutes = require('./User.Routes');
const rideRoutes = require('./Ride.Routes');
const vehicleRoutes = require('./Vehicle.Routes');
const express = require('express');
const routes = express.Router();


routes.use('/user', userRoutes);
routes.use('/rides', rideRoutes);
routes.use('/vehicle', vehicleRoutes);

module.exports = routes;
