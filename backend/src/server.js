const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
require('dotenv').config(); // utilizado para deixar disponível as varíaveis que estão no .env

// consumindo o swagger
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

//  Iniciando o servidor
const app = express();

//  Determinar o uso de JSON
app.use(express.json());

// DETERMINANDO O USO DO CORS PARA SER CONSUMIDO PELO FRONT END
app.use(cors());

//  Conectando com o banco de dados
mongoose.connect(
  process.env.MONGO_CONECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//  Fazendo o require da pasta models
requireDir('./models');

// ADD O SWAGGER EM UMA ROTA
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerFile));

//  Fazendo o require das rotas
app.use('/api', require('./routers/index.routes'));

//  Iniciando o servidor
app.listen(3001);
console.log('Servidor rodando em http://localhost:3001');
