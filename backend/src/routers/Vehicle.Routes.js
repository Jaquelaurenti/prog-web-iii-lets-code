const express = require('express');
const router = express.Router();
const VerifyToken = require('../middleware/VerifyToken');
const vehicleController = require('../controllers/vehicleController');


router.post('', VerifyToken, vehicleController.createVehicle);
router.get('', VerifyToken, vehicleController.getVehicles);


module.exports = router;