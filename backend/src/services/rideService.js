const rideRepository = require('../repositories/rideRepository');
const userRepository = require('../repositories/userRepository');
const vehicleRepository = require('../repositories/vehicleRepository');

const createRideService = async (payload) => {
  try {
    // desestruturar o payload
    const { user, vehicle, startPlace, finishPlace, } = payload;
    //const { telephone } = user;
    // const { licensePlate } = vehicle;
    let ride = {};
    let findUser;

    // primeiro validar se o usuário existe
    if (user) {
      // verifico se o usuario informou o telephone
      if (user.telephone) {
        findUser = await userRepository.getUserByTelephone(user.telephone);
        // VERIFICAR SE O USUÁRIO POSSUI ALGUMA CORRIDA CADASTRADA OU INICIADA, SE HOUVER NÃO DEIXAR CADASTRAR UMA NOVA CORRIDA
        if (!findUser) {
          return {
            statusCode: 402,
            data: "usuário não enconstrado"
          }
        }
      } else {
        return {
          statusCode: 409,
          data: "O telefone do usuário não foi informado!"
        }
      }
    } else {
      return {
        statusCode: 409,
        data: "O usuário não foi informado!"
      }
    }

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

module.exports = {
  createRideService,
}