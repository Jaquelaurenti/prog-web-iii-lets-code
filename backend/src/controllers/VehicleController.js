const vehicleService = require('../services/vehicleService');

const createVehicle = async (req, res) => {
  const body = req.body;
  const response = await vehicleService.createVehicleService(body);
  return res.status(response.statusCode).json(response.data);
}

const getVehicles = async (req, res) => {
  const response = await vehicleService.getVehiclesService();
  return res.status(response.statusCode).json(response.data);
}


module.exports = {
  createVehicle, getVehicles
}