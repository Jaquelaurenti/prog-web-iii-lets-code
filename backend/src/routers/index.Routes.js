const userRouters = require('./user.routes');
const vehicleRouters = require('./vehicle.routes');
const rideRouters = require("./ride.routes");
const express = require('express');
const router = express.Router();

router.use('/user', userRouters);
router.use('/vehicle', vehicleRouters);
router.use('/rides', rideRouters);

module.exports = router;
