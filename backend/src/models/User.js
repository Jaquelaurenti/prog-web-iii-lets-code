const mongoose = require('mongoose');

//  Criando o esquema do usuário
//  O esquema é um objeto que define o formato dos dados que serão armazenados
//  Ou seja, a estrutura da tabela no banco de dados

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
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
mongoose.model('User', userSchema);
