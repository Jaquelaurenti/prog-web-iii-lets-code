const express = require('express');
const routerRides = express.Router();
const rideController = require('../controllers/rideController');

routerRides.post('', rideController.postRide);

module.exports = routerRides;
