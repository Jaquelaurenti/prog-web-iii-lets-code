// usando a desestruturação para unificar
// todos os  resolvers no index e exportando
// apenas a constante que guarda as reesolvers 
const profissao = require('./profissao');

const rootResolver = {
    ...profissao
}

module.exports = rootResolver;