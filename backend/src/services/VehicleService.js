const vehicleRepository = require('../repositories/vehicleRepository');

const createVehicleService = async (payload) => {
  // tratamento de erros
  // mapeamento de erros que acontecem e eu consigo prever
  try {
    // desestruturação para acessar os valores do payload
    const { licensePlate } = payload;

    // verificar se o payload está preenchido ou não
    if (!payload) {
      return {
        // tratar esse erro na camada 4
        statusCode: 400,
        data: 'Dados de veículo não informados!'
      }
    }
    // verificar se o veículo já existe na base caso exista retornar uma mensagem informando que o veículo já existe na base de dados
    const findVehicle = await vehicleRepository.getVehicleByLicensePlate(licensePlate);
    if (findVehicle) {
      return {
        // tratar esse erro na camada 4
        statusCode: 400,
        data: 'Veículo já cadastrado na base'
      }
    }
    const data = await vehicleRepository.createVehicle(payload);
    if (data) {
      return {
        statusCode: 200,
        data: data
      }
    }
  }
  catch (error) {
    // erros que acontece durante a execução e a aplicação não consegue prever
    return {
      // tratar esse erro na camada 4
      statusCode: 500,
      data: error.message
    }
  }
}

const getVehiclesService = async () => {
  try {
    // caso não encontre nenhum veículo retornar mensagem de erro
    const vehicles = await vehicleRepository.getVehicles();
    if (!vehicles) {
      return {
        statusCode: 402,
        data: 'Nenhum veículo encontrado'
      }
    }
    return {
      statusCode: 200,
      data: vehicles
    }

  }
  catch (error) {
    // erros que acontece durante a execução e a aplicação não consegue prever
    return {
      // tratar esse erro na camada 4
      statusCode: 500,
      data: error.message
    }
  }

}


module.exports = {
  createVehicleService, getVehiclesService
}