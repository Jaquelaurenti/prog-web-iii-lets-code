const express = require('express');

var app = express();


// A função está sendo executada para qualquer verbo
// é a representação do que o createServer do http/htpps faz
app.use('/user/:id/:nome', function(req, res, next){
  console.log('tipo de requisição', req.method);
  next();

});

app.get('/user/:id', function (req, res, next) {
  res.send("ESTOU NA ROTA DE USUÁRIO");
  
});


app.listen(3333);
console.log("Servidor escutando na porta: 3333");