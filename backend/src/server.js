const express = require('express');
const mongoose = require('mongoose'); // irá nos apoiar a manipular o mongoDB
const requireDir = require('require-dir');

// INICIANDO O SERVIDOR
const app = express();

// determinar que o uso do JSON
app.use(express.json());

// Conectar no bando de dados
mongoose.connect(
  "mongodb+srv://jaquelaurenti:EwHBj5geNVER1NDo@melevaai.ixn5yx1.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Fazer a junção dos meus Schema de Banco de Dados
requireDir('../src/models');

// consumindo a rota
app.use('/api', require('./routers/index.Routes'));

console.log("Ouvindo na porta 3001")
app.listen(3001);



