const express = require('express');
const routerRides = express.Router();
const rideController = require('../controllers/rideController');
const VerifyToken = require('../utils/VerifyToken');

// o verify token precisa ser acionado nas rotas
// routerRides.post('', verifyToken,rideController.postRide);
routerRides.post('', VerifyToken, rideController.postRide);
routerRides.patch('/:id', VerifyToken, rideController.updateRide);
routerRides.get('/users/:telephone', VerifyToken, rideController.getRidesByTelephone);

module.exports = routerRides;
