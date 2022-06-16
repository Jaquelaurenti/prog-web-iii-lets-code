const mongoose = require('mongoose');

//  Criando o esquema do usuário
//  O esquema é um objeto que define o formato dos dados que serão armazenados
//  Ou seja, a estrutura da tabela no banco de dados

const vehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  licensePlate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
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
mongoose.model('Vehicle', vehicleSchema);
