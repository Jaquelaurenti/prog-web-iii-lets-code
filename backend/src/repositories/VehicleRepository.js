// Instanciando o mongo para trabalhar com a entidade
// Camada de repository é responsável somente por transacionar o banco de dados.


const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle');

const createVehicle = async (user) => {
  const response = await Vehicle.create(user);
  return response;
}

const getVehicles = async () => {
  const response = await Vehicle.find({});
  return response;
}

const getVehicleByLicensePlate = async (plate) => {
  const response = await Vehicle.findOne({ licensePlate: plate });
  return response;
}


module.exports = {
  createVehicle,
  getVehicleByLicensePlate,
  getVehicles
}
