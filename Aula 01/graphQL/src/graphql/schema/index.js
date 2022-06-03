const { buildSchema } = require('graphql');
const mergeGraphqlSchemas = require('merge-graphql-schemas');
const mergeTypes = mergeGraphqlSchemas.mergeTypes;


const profissao = require('./profissaoSchema');

const rootSchema = [
    profissao,
];

const schemaMerged = mergeTypes(rootSchema, { all: true });
module.exports = buildSchema(schemaMerged);