import https from 'https';

// GET 

const opcao = {
  hostname: 'about.google', // URI BASE QUE EU QUERO FAZER A REQUISIÇÃO
  port: 443, // porta padrão para requisições https, porta 80 http
  path: '/stories/', // rota de acesso após o hostname
  method: 'GET'
};

const req = https.request(opcao, (res) => {
  console.log("estou aqui");
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`statusMessage: ${res.statusMessage}`);
  res.on('data', (d) => {
    process.stdout.write(d) // monta um html do resultado da requisição get que eu estou fazendo
  });
}); // listener de execução da request 

req.on('error', (error) => {
  console.log("estou aqui onde deu erro na requisição");
  console.log(error);
}); // listener só para caso de erro

req.end(); // finalizando a requisição
