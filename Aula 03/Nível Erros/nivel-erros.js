const express = require('express');
var app = express();

app.use(function (err, req, res, next) {
  console.error(err.stack);

  res.status(500).send('Erro na aplicação');
});



app.listen(3333);
console.log("Servidor escutando na porta erros: 3333");