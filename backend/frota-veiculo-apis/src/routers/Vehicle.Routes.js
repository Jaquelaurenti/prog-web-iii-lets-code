const express = require('express');
const routesVehicle = express.Router();
const verifyJWT = require('../middleware/verifyToken');


// importando o controller
const VehicleController = require('../controllers/VehicleController');
routesVehicle.get('', verifyJWT, VehicleController.index);
routesVehicle.post('', verifyJWT, VehicleController.store);
routesVehicle.get('/:id', verifyJWT, VehicleController.show);
routesVehicle.put('/:id', verifyJWT, VehicleController.update);
routesVehicle.delete('/:id', verifyJWT, VehicleController.destroy);

module.exports = routesVehicle;
