const vehicleRepository = require('../repositories/VehicleRepository');

const index = async (page) => {
  try {
    const vehicles = await vehicleRepository.paginate(page);
    if (!vehicles) {
      return {
        statusCode: 404,
        data: 'Nenhum veículo encontrado!'
      }
    }
    return {
      statusCode: 200,
      data: vehicles
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }

};

const show = async (id) => {
  try {
    const vehicles = await vehicleRepository.findById(id);
    if (!vehicles) {
      return {
        statusCode: 404,
        data: 'Nenhum veículo encontrado!'
      }
    }
    return {
      statusCode: 200,
      data: vehicles
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }

};

const store = async (bodyVehicle) => {
  try {
    const vehicles = await vehicleRepository.create(bodyVehicle);
    if (!vehicles) {
      return {
        statusCode: 404,
        data: 'Veículo já cadastrado na base'
      }
    }
    return {
      statusCode: 200,
      data: vehicles
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }

};

const update = async (id, vehicleUpdate) => {
  try {
    const vehicles = await vehicleRepository.findByIdAndUpdate(id, vehicleUpdate, { new: true });
    if (!vehicles) {
      return {
        statusCode: 404,
        data: 'Nenhum veículo encontrado!'
      }
    }
    return {
      statusCode: 200,
      data: vehicles
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }

};

const destroy = async (id) => {
  try {
    const vehicles = await vehicleRepository.findById(id);
    if (!vehicles) {
      return {
        statusCode: 404,
        data: 'Veículo não encontrado!'
      }
    }


    await vehicleRepository.findByIdAndRemove(id);


    return {
      statusCode: 200,
      data: 'Veículo deletado com sucesso!'
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error
    }
  }

};

module.exports = {
  destroy, update, store, show, index
};
