const rideService = require('../services/rideService');


const postRide = async (req, res) => {
  const { body } = req;
  const response = await rideService.createRideService(body);
  return res.status(response.statusCode).json(response.data);
};

const updateRide = async (req, res) => {
  const id = req.params.id;
  const { type } = req.body

  const payload = {
    id, type
  }

  const response = await rideService.updateStatusRide(payload);
  return res.status(response.statusCode).json(response.data);
};

module.exports = {
  postRide, updateRide
}