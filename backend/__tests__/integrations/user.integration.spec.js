// importando o supertest que irá simular o servidor da nossa aplicação
const request = require('supertest');
// importando o app para que o supertest faça uso do que está dentro dele.
const app = require('../../frota-veiculo-apis/app');


describe('User', () => {

  test('Deverá criar um usuário', async () => {
    // mockando o meu usuário
    const user = {
      name: 'Teste Integrado',
      email: 'teste@integrado.com',
      password: '123456',
      telephone: '0123456789'
    }
    const response = await request(app).post('api/user').send(user);

    expect(response.statusCode).toBe(201);
  });

});
