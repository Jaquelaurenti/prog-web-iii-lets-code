// importando o supertest que irá simular o servidor da nossa aplicação
const request = require('supertest');
// importando o app para que o supertest faça uso do que está dentro dele.
const app = require('../../frota-veiculo-apis/app');
// importando a lib vai criar registros fakes no usuario
const { faker } = require('@faker-js/faker');

jest.setTimeout(30000);

describe('User', () => {

  test('Deverá criar um usuário', async () => {
    // mockando o meu usuário
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      telephone: faker.phone.number()
    }
    const response = await request(app).post('/api/user').send(user);

    expect(response.statusCode).toBe(201);
  });

});
