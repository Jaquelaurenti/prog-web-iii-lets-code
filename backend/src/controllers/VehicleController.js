const vehicleService = require('../services/VehicleService');

const createVehicle = async (req, res) => {
  const body = req.body;
  const response = await vehicleService.createVehicleService(body);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  createVehicle,
}
