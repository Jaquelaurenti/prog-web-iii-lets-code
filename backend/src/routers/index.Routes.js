const userRouters = require('./user.routes');
const vehicleRouters = require('./vehicle.routes');
const express = require('express');
const router = express.Router();

router.use('/user', userRouters);
router.use('/vehicle', vehicleRouters);

module.exports = router;
