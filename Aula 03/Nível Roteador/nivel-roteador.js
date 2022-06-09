const express = require('express');

var app = express();
var rotas = express.Router(); // fazendo o uso das rotas através do express

rotas.use(function(req, res, next){
  console.log("Data e hora:", Date.now().toString());
  next();
});


app.listen(3333);
console.log("Servidor escutando na porta: 3333");