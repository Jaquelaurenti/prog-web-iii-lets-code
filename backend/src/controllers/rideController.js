const rideService = require('../services/rideService');


const postRide = async (req, res) => {
  const { body } = req;
  const response = await rideService.createRideService(body);
  return res.status(response.statusCode).json(response.data);
};

module.exports = {
  postRide,
}