import https from 'https';

// GET 

const data = JSON.stringify({
  "test": "event",
  "nome": "Jaque",
  "TESTE": "SAINDO DO 31"
}); 

const opcao = {
  hostname: 'eoo7nq3hl2fpj4y.m.pipedream.net', // URI BASE QUE EU QUERO FAZER A REQUISIÇÃO
  port: 443, // porta padrão para requisições https, porta 80 http
  path: '/', // rota de acesso após o hostname
  method: 'POST', 
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
    },
};

const req = https.request(opcao); // listener de execução da request 
req.write(data);
req.on('error' ,(error) => {
  console.log("errors");
  console.log(error)
})
req.end(); // finalizando a requisição


