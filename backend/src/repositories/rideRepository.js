const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');

const createRide = async (ride) => {
  return await Ride.create(ride);
}

const startRide = async (ride) => {

  // SETANDO OS CAMPOS QUE SERÃO ALTERADOS
  ride.startTime = new Date();
  ride.status = 'started';

  return await Ride.findByIdAndUpdate(ride._id,
    ride, { new: true });

}
const stopRide = async (ride) => {
  // SETANDO OS CAMPOS QUE SERÃO ALTERADOS
  ride.finishTime = new Date();
  ride.status = 'finished';

  return await Ride.findByIdAndUpdate(ride._id,
    ride, { new: true });
}

// criando um método que retorna todas as corridas por id

const getRideById = async (id) => {
  return await Ride.findById(id);

}
// validar o status de uma corrida por usuário
// filtrar corridas de usuario por: asked ou started

const getRidesByTelephone = async (telephone, page) => {
  console.log(telephone)
  return await Ride.paginate({ 'user.telephone': telephone }, { page, limit: 10 });
}

module.exports = {
  createRide, startRide, stopRide, getRideById, getRidesByTelephone
}