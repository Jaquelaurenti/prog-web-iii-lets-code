const swaggerAutoGen = require('swagger-autogen')();

const outputFile = './swagger_output.json'; // Arquivo onde será armazenado as rotas
const endpointFiles = ['./src/routers/index.Routes.js']


// Documentação
const doc = {
  info: {
    version: "1.0",
    title: "Lets Code Me Leva Ai para o Ifood",
    description: ""
  },
  host: "localhost:3001",
  basePath: "/api",
  consumes: ['application/json'],
  produces: ['application/json'],
  // Informações sobre a autenticação
  securityDefinitions: {
    Authorization: {
      type: "apiKey",
      in: "header",
      name: "x-access-token",
      description: "Adicionar o token gerado no x-access-token"
    }
  }
};

swaggerAutoGen(outputFile, endpointFiles, doc);