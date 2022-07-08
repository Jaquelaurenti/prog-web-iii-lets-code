// instanciar a camada de service
const userService = require('../../frota-veiculo-apis/src/services/UserService');

// instanciar o mockingoose
const mockingoose = require('mockingoose')

// instanciar a cama de model
const userModel = require('../../frota-veiculo-apis/src/models/Users');


// precisamos limpar
afterEach(() => {
  jest.restoreAllMocks();
});

/*beforeEach(() => {

});*/

describe('Teste de Unidade do Usuário', () => {
  test('Deverá incluir o usuário se o mesmo não existir na base', async () => {

    // preciso construir o meu objeto de entrada
    const data = {
      name: 'Teste de Unidade',
      email: 'teste@unidade.com',
      password: '123456',
      telephone: '0123456789'
    }

    // Forçando o retorno null para quando realizar o findOne ele não encontrar nada
    // e seguir com o insert de usuário
    mockingoose(userModel).toReturn(null, 'findOne');

    const response = await userService.store(data);
    expect(response.statusCode).toBe(201);
    expect(response.data.name).toBe('Teste de Unidade');
    expect(response.data.telephone).toBe('0123456789');
    expect(response.data.email).toBe('teste@unidade.com');

  });

  test('Deverá retornar uma mensagem de erro para quando eu inserir um usuario que ja existe na base', async () => {

    // preciso construir o meu objeto de entrada
    const data = {
      name: 'Teste de Unidade',
      email: 'teste@unidade.com',
      password: '123456',
      telephone: '0123456789'
    }

    // Forçando o retorno com o data  para quando realizar o findOne ele encontrar um usuário e retornar uma mensagem de erro
    mockingoose(userModel).toReturn(data, 'findOne');

    const response = await userService.store(data);
    expect(response.statusCode).toBe(406);
    expect(response.data).toBe('Usuário já cadastrado!');

  });

  test('Deverá remover um usuário', async () => {
    // começar a montar o nosso objeto de remoção
    const data = {
      _id: '62b8df3b85371c1b1502e791',
      name: 'Teste de Unidade',
      email: 'teste@unidade.com',
      password: '123456',
      telephone: '0123456789'
    }

    // Forçando o retorno com o data  para quando realizar o findOne ele encontrar um usuário e retornar uma mensagem de erro
    mockingoose(userModel).toReturn(data, 'findOne');

    // remover o usuário
    const response = await userService.destroy(data.telephone);
    expect(response.statusCode).toBe(200);
    expect(response.data).toBe('Usuário deletado com sucesso!');
  });

  test('Deverá retornar uma mensagem de erro ao tentar remover um usuário que não existe na base', async () => {
    const data = {
      _id: '62b8df3b85371c1b1502e791',
      name: 'Teste de Unidade',
      email: 'teste@unidade.com',
      password: '123456',
      telephone: '0123456789'
    }

    // Forçando o retorno com o null  para quando realizar o findOne ele não encontrar
    mockingoose(userModel).toReturn(null, 'findOne');

    const response = await userService.destroy(data.telephone);
    expect(response.statusCode).toBe(400);
    expect(response.data).toBe('Usuário não cadastrado!');

  });
});
