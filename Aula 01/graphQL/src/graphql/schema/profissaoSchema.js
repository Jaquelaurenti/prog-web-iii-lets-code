module.exports =  `
type Profissao {
    _id: ID!
    nome: String!
}

input ProfissaoInput {
    nome: String!,
}

type RootQuery {
    profissoes: [Profissao!]!
}

type RootMutation {    
    createProfissao(profissaoInput: ProfissaoInput): Profissao
    updateProfissao(profId: ID!, profissaoInput: ProfissaoInput): Profissao
    deleteProfissao(profId: ID!): Profissao
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`;