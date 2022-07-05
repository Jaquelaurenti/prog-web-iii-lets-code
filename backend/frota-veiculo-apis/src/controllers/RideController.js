
const rideService = require('../services/RideService');

const status = async (req, res) => {
  const response = rideService.status(req.params._id);
  return res.status(response.statusCode).json(response.data);
}

const history = async (req, res) => {
  const { page = 1 } = req.query;
  const response = await rideService.history(page);
  return res.status(response.statusCode).json(response.data);

}

const userHistory = async (req, res) => {
  const telephone = req.params.id;
  const { page = 1 } = req.query;
  const response = await rideService.userHistory(telephone, page);
  return res.status(response.statusCode).json(response.data);

}

const ask = async (req, res) => {
  const { telephone, startPlace, finishPlace } = req.body;

  const response = await rideService.ask(telephone, startPlace, finishPlace);
  return res.status(response.statusCode).json(response.data);
}

const updateStatus = async (req, res) => {
  const id = req.params.id;
  const { type } = req.body;

  const response = await rideService.updateStatus(id, type);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  status, ask, updateStatus, history, userHistory
};
