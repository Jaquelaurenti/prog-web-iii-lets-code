const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const expressPlayground = require("graphql-playground-middleware-express")
  .default;

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

// setando o parser do json
app.use(bodyParser.json());

// setando o graphql 
app.use('/graphql', graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
}));

app.listen(8000);
console.log("🚀  Servidor conectado:8000");
console.log("🚀  GraphQL: http://localhost:8000/graphql");
console.log("🚀  Playground: http://localhost:8000/playground");


// CONEXÃO AO BANCO DE DADOS
/*mongoose.connect(`mongodb://localhost/${process.env.MONGO_DBNAME}`, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => {
        app.listen(8000);
        console.log("Servidor conectado:8000");
    })
    .catch(err => {
        console.log("errooo:", err);
    });*/

//Graphql Playground route 
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));