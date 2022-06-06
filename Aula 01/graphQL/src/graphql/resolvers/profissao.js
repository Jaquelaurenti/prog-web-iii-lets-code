/*
Criando a estrutura das ações da minha entidade

*/


const Profissao = [{
    id: 12,
    nome: "Jaque",
    _doc: 11111
},
{
    id: 3,
    nome: "Jaque",
    _doc: 11111
},
{
    id: 4,
    nome: "Jaque",
    _doc: 11111
}]

// comentando apenas pq deixei chumbado poderia vir da models
//require('../../models/profissao');

module.exports = {
    profissoes: async () => {
        try {
            const profissoes = Profissao;
            return  profissoes.map(prof => {
                return {
                    ...prof._doc,
                    _id: prof.id,
                    nome: prof.nome,
                };
            });
        }
        catch (err) {
            throw err;
        };
    },

    createProfissao: async (args, req) => {
        const prof = new Profissao({
            nome: args.profissaoInput.nome,
        });

        try {
            const result = await prof.save();
            return {
                ...result._doc,
                _id: result.id,
                nome: result.nome,
            };
        }
        catch (err) {
            console.log(err);
            throw err;
        };
    },

    updateProfissao: async (args, req) => {

        const filter = { _id: args.profId };
        const update = { nome: args.profissaoInput.nome };

        try {
            return await Profissao.findByIdAndUpdate(filter, update, { new: true });
        } catch (err) {
            console.log(err);
            throw err;
        }
    },

    deleteProfissao: async (args, req) => {
        //if (!req.isAuth) {
        //    throw new Error ('Unauthenticated!');
        //}

        const filter = { _id: args.profId };

        try {
            await Profissao.deleteOne(filter);
            return {
                status: 'sucesso!'
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

};