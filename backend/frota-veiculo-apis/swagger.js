const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'; // Arquivo que será gerado com as rotas
const endpointsFiles = ['./frota-veiculo-apis/src/routers/index.routes.js']; // endpoint de onde está armazenada todas as rotas

// Documentação

const doc = {
  info: {
    version: "1.0.0",
    title: "Me Leva Ai",
    description: ""
  },
  host: "localhost:3001",
  basePath: "/api", // rota base
  consumes: ['application/json'],
  produces: ['application/json'],
  // Informações sobre a autenticação
  securityDefinitions: {
    Authorization: {
      type: "apiKey",
      in: "header",
      name: "x-access-token",
      description: "Adicionar o token gerado no login"
    }
  },
}

swaggerAutogen(outputFile, endpointsFiles, doc);

