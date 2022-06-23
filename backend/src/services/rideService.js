const rideRepository = require('../repositories/rideRepository');
const userRepository = require('../repositories/userRepository');
const vehicleRepository = require('../repositories/vehicleRepository');

const createRideService = async (payload) => {
  try {
    // desestruturar o payload
    const { telephone, vehicle, startPlace, finishPlace, } = payload;

    let ride = {};

    const findUser = await userRepository.getUserByTelephone(telephone);

    if (!findUser) {
      return {
        statusCode: 402,
        data: 'Usuário nao encontrado',
      }
    }

    // LIÇÃO DE CASA
    // AO INVÉS DE RECEBER O VEÍCULO COMO PARÂMETRO
    // BUSCAR NO CADASTRO DE VEICULOS

    // UM VEÍCULO QUE NÃO ESTEJA ASSOCIADO A NENHUMA CORRIDA CUJO STATUS SEJA IGUAL A STARTED

    // PARA FUNCIONAR NO FRONT REMOVER O INPUT DE LICENSE PLATE

    // validando se o veículo existe
    // primeiro verifico se o objeto de veículo foi informado
    if (vehicle) {
      // verifico se a placa do carro foi informada dentro do objeto de veículo
      if (vehicle.licensePlate) {
        const findVehicle = await vehicleRepository.getVehicleByLicensePlate
          (vehicle.licensePlate);
        // verifica se a busca retornou registro
        if (!findVehicle) {
          return {
            statusCode: 402,
            data: "Não foi encontrado carro com esta placa informada na base de dados!"
          }
        }

        ride = {
          user: findUser,
          vehicle: findVehicle,
          startPlace: startPlace,
          finishPlace: finishPlace,
          status: "asked"
        }

        // inserir a corrida
        const data = await rideRepository.createRide(ride);
        if (!data) {
          return {
            statusCode: 500,
            data: "Erro ao inserir corrida no banco"
          }

        }
        return {
          statusCode: 200,
          data: data,
        }

      }
      else {
        return {
          statusCode: 409,
          data: "A placa do carro não foi informads!"
        }
      }
    }
    else {
      return {
        statusCode: 409,
        data: "O veículo não foi informado!"
      }
    }


  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message,
    }
  }
}

const updateStatusRide = async (payload) => {
  try {
    const { id, type } = payload;

    const ride = await rideRepository.getRideById(id);

    if (!ride) {
      return {
        statusCode: 402,
        data: 'Corrida não encontrada',
      }
    }

    // verificar o tipo de corrida que eu recebi
    // e direcioná-lo para o método correto
    switch (type) {
      case 'start':
        // situações para corridas do tipo start
        if (ride.status === 'started') {
          return {
            statusCode: 400,
            data: 'Corrida já foi iniciada!',
          }
        }
        else if (ride.status === 'finished') {
          return {
            statusCode: 400,
            data: 'Não é possível iniciar corrida já finaliza',
          }
        }
        const dataStart = await rideRepository.startRide(ride);
        return {
          statusCode: 200,
          data: dataStart
        }

      // situações para corridas do tipo stop
      case 'stop':
        if (ride.status === 'asked') {
          return {
            statusCode: 400,
            data: 'Corrida não foi iniciada!',
          }
        }
        else if (ride.status === 'finished') {
          return {
            statusCode: 400,
            data: 'Corrida já foi finalizada!',
          }
        }
        const dataStop = await rideRepository.stopRide(ride);
        return {
          statusCode: 200,
          data: dataStop
        }
      default:
        return {
          statusCode: 500,
          data: 'O tipo informado só pode ser start ou stop'
        }
    }



  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message,
    }
  }


}

module.exports = {
  createRideService, updateStatusRide
}