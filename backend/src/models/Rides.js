const mongoose = require('mongoose');

//  Criando o esquema do usuário
//  O esquema é um objeto que define o formato dos dados que serão armazenados
//  Ou seja, a estrutura da tabela no banco de dados

const rideSchema = new mongoose.Schema({
  //  Vincular o usuário através do objeto User
  user: {
    type: Object,
    required: true
  },
  //  Vincular o veículo através do objeto Vehicle
  vehicle: {
    type: Object,
    required: true
  },
  startPlace: {
    type: String,
    required: true
  },
  finishPlace: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: false
  },
  finishTime: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

//  Registrando o esquema no mongoose
//  O mongoose.model() recebe dois parâmetros:
//  1. O nome do modelo
//  2. O esquema do modelo
mongoose.model('Ride', rideSchema);
