const userService = require('../../src/services/userService');
const mockingoose = require('mockingoose');

const UserModel = require("../../src/models/User");

afterEach(() => {
  jest.restoreAllMocks()
});


describe("Testes de Usuário", () => {

  test('deverá criar o cliente se o usuário não exisitir na base', async () => {
    const userParam = {
      name: 'Teste',
      email: 'teste@mail.com',
      telephone: '99999999',
      password: '123456'
    };

    // Forçando o retorno null quando realizar um findOne
    // mockingoose(UserModel).toReturn(null, 'findOne');
    // Se eu fosse criar diretamente no banco sem passar pela service
    // mockingoose(UserModel).toReturn(userParam, 'create')


    // Nao printo o password por que ele é dinamico
    const userResponse = await userService.createUser(userParam);
    expect(userResponse.statusCode).toBe(201);
    expect(userResponse.data.name).toBe('Teste');
    expect(userResponse.data.email).toBe('teste@mail.com');
    expect(userResponse.data.telephone).toBe('99999999');
  });

  test('deverá retornar mensagem de erro ao criar um usuário que já existe na base', async () => {
    const userParam = {
      _id: "62b8df3b85371c1b1502e791",
      name: 'Teste',
      email: 'teste@mail.com',
      telephone: '99999999',
      password: '123456'
    };

    //Mockando o usuario
    mockingoose(UserModel).toReturn(userParam, 'findOne');


    // Nao printo o password por que ele é dinamico
    const userResponse = await userService.createUser(userParam);

    expect(userResponse.statusCode).toBe(409);
    expect(userResponse.data).toBe('Usuário já cadastrado!');
  });

});

