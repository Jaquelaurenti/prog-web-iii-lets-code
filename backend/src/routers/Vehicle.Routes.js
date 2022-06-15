const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/VehicleController');


router.post('', vehicleController.createVehicle);


module.exports = router;
