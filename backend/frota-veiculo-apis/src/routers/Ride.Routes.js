const express = require('express');
const routesRide = express.Router();
// importando o controller
const RideController = require('../controllers/RideController');
const verifyJWT = require('../middleware/verifyToken');

routesRide.post('', verifyJWT, RideController.ask);
routesRide.get('', verifyJWT, RideController.history);
routesRide.get('/:id', verifyJWT, RideController.status);
routesRide.get('/users/:id', verifyJWT, RideController.userHistory);
routesRide.patch('/:id', verifyJWT, RideController.updateStatus);


module.exports = routesRide;
