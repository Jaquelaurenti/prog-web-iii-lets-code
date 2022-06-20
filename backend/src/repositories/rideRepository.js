const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');


const createRide = async (ride) => {
  return await Ride.create(ride);
}

module.exports = {
  createRide,
}