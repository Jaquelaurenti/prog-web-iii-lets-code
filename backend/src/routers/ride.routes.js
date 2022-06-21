const express = require('express');
const routerRides = express.Router();
const rideController = require('../controllers/rideController');

// o verify token precisa ser acionado nas rotas
// routerRides.post('', verifyToken,rideController.postRide);
routerRides.post('', rideController.postRide);

module.exports = routerRides;
