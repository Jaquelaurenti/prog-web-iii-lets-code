const mongoose = require('mongoose');

// criando meu schema 
// schema: vai ser a estrutura da minha tabela

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Registrando o schema e atribuindo a uma tabela
mongoose.model('User',userSchema);


