const mongoose = require('mongoose');
const { findDOMNode } = require('react-dom/cjs/react-dom.production.min');
const Ride = mongoose.model('Ride');


const createRide = async (ride) => {
  return await Ride.create(ride);
}

// iniciar a corrida
// fazer um update
// alterando o status da corrida de asked para started
// e tambem alterar a data de inicio da corrida
// usar o Ride.findByIdAndUpdate()
// CRIAR UMA ROTA NOVA

// finalizar a corrida
// fazer um update
// alterando o status da corrida de started para fineshed
// e tambem alterar a data de finalização da corrida
// Ride.findByIdAndUpdate()
// CRIAR UMA ROTA NOVA

// validar o status de uma corrida por usuário
// filtrar corridas de usuario por: asked ou started

module.exports = {
  createRide,
}