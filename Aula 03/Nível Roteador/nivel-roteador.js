const express = require('express')
var app = express();
var router = express.Router();



// Este código é executado para cada solicitação ao roteador
router.use(function (req, res, next) {
  console.log('Data e Hora', Date.now());
  next();
});

// uma sub - pilha de middleware mostra informações de solicitação para qualquer tipo de solicitação HTTP para o caminho / user /: id
router.use('/user/:id', function (req, res, next) {
  console.log('Url solicitada:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Tipo de requisicao:', req.method);
  next();
});

// aqui usando o get
router.get('/user/:id', function (req, res, next) {
  // se o id for 0 vai pular para a proxima rota
  if (req.params.id == 0) next('route');
  // se não pula para a proxima função
  else next(); //
}, function (req, res, next) {
  res.send("Estou aqui na funçção pois o parametro é diferente de 0");
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.send("Estou aqui na funçção pois o parametro é igual a  0");
});

// aqui montando o roteador base
app.use('/', router);

// colocando a porta que vai ser ouvida
app.listen(3333);
console.log("Servidor escutando na porta roteador: 3333");