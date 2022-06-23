const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//  Iniciando o servidor
const app = express();

//  Determinar o uso de JSON
app.use(express.json());

// DETERMINANDO O USO DO CORS PARA SER CONSUMIDO PELO FRONT END
app.use(cors());

//  Conectando com o banco de dados
mongoose.connect(
  'mongodb+srv://jaquelaurenti:pljOqvAqFkIOQofD@melevaai.791smmp.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//  Fazendo o require da pasta models
requireDir('./models');

//  Fazendo o require das rotas
app.use('/api', require('./routers/index.routes'));

//  Iniciando o servidor
app.listen(3001);
console.log('Servidor rodando em http://localhost:3001');
