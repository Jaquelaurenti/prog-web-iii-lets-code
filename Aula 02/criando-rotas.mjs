import http from 'http';
const porta = 3000;
const ip = 'localhost';

const servidor = http.createServer((req, res) => {
  console.log(req.url);
  
  if(req.url == "/") {
    res.end("Estou na home");
  }

  if(req.url == "/contato") {
    res.end("Estou no contato");
  }
});


servidor.listen(porta, ip, () =>{
  console.log(`Servidor rodando em: ${ip} ${porta}`)
})