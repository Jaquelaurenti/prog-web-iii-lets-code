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

const getRidesByTelephone = async (req, res) => {
  const { page = 1 } = req.query;
  const telephone = req.params.telephone
  const response = await rideService.getRidesByUser(telephone, page);
  return res.status(response.statusCode).json(response.data);

}

module.exports = {
  postRide, updateRide, getRidesByTelephone
}