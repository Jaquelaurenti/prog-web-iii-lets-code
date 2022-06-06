// Construindo apenas o servidor usando http
//const http = require('http');
import http from 'http'
// definindo a porta do meu servidor
const porta = 3000;


const requestListener = function(req, res){
  res.writeHead(500, {'Content-Type': 'text/html'})
  res.end("Olá pessoal da turma 837");
};

// rodando o listener
const servidor = http.createServer(requestListener);
servidor.listen(porta, () => {
  console.log(`0Servidor rodando em: http://localhost:${porta}`)
});
