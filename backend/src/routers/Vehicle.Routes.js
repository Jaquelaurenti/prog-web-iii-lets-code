const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicleController');


router.post('', vehicleController.createVehicle);
router.get('', vehicleController.getVehicles);


module.exports = router;