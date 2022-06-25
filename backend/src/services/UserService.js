const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const security = require('../utils/securityPassword');
const { hash } = require('bcryptjs');

//  Trabalhando com um objeto de retorno padrão
//  statusCode: armazena o código de status da requisição
//  data: armazena o conteúdo da requisição
//      pode ser um objeto, um array ou uma string

const createUser = async (name, telephone, email, password) => {

  //  Validar os parâmetros do usuário
  if (!name || !telephone || !email || !password) {
    return {
      statusCode: 400,
      data: 'Não foi possível criar o usuário. Os parâmetros não foram informados corretamente.'
    }
  }

  //  Depois da validação, verificar se o usuário já existe
  try {
    const userExists = await userRepository.getUserByTelephone(telephone);
    if (userExists) {
      return {
        statusCode: 409,
        data: { message: 'Usuário já cadastrado.' }
      }
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message
    }
  }

  //  Se não existir, criar o usuário
  try {
    const hashPassword = security.encrypt(password);
    const user = {
      name,
      telephone,
      email,
      password: hashPassword
    };
    await userRepository.createUser(user);
    return {
      statusCode: 201,
      data: user
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível criar o usuário.',
        error: error.message
      }
    }
  }
}

const getUsers = async () => {
  try {
    const users = await userRepository.getUsers();
    return {
      statusCode: 200,
      data: users
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: {
        message: 'Não foi possível obter os usuários.',
        error: error.message
      }
    }
  }
}

const getUserByTelephoneAndPassword = async (telephone, password) => {
  try {
    const user = await userRepository.getUserByTelephoneAndPassword(telephone, password);
    if (user) {
      return {
        statusCode: 200,
        data: user
      }
    }
    else {
      return {
        statusCode: 404,
        data: { message: 'Usuário não encontrado.' }
      }
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message
    }
  }
}

const loginService = async (payload) => {
  try {

    // preciso antes de validar o telefone e a senha
    // preciso encontrar o hash correspondente ao telefone informado

    const { telephone, password } = payload;
    if (!(telephone && password)) {
      return {
        statusCode: 400,
        data: "Telefone ou Senha não informado"
      }
    }
    const findUser = await userRepository.getUserByTelephone(telephone);

    if (!findUser) {
      return {
        statusCode: 400,
        data: "usuário não existe na base de dados"
      }
    }

    // preciso pegar a senha hash que foi salva no banco
    // para fazer o compare
    const hashPassword = findUser.password;
    const verifyPasswordUser = security.verifyPassword(password, hashPassword);
    if (!verifyPasswordUser) {
      return {
        statusCode: 500,
        data: "Senha inválida!"
      }
    }
    // verificar se o telephone e a senha inserido existem na base de dados
    const user = await userRepository.getUserByTelephoneAndPassword(telephone, hashPassword);

    if (!user) {
      return {
        statusCode: 500,
        data: "Usuário não encontrado"
      }
    }
    const userData = {
      telephone: user.telephone,
      name: user.name,
    }
    // Autenticar o usuario na base através do JWT
    // segundo parametro e a chave que gera o token
    const token = jwt.sign({ userData }, process.env.SECRET_KEY, {
      expiresIn: 3000 // tempo de expiração do token;
    });

    // se a geração do token acontecer
    if (token) {
      const data = {
        auth: true,
        token: token,
        user: userData,
      }
      return {
        statusCode: 200,
        data: data
      }
    }
    else {
      return {
        statusCode: 500,
        data: "Não foi possível gerar o token !"
      }
    }

  }
  catch {
    return {
      statusCode: 500,
      data: error.message
    }
  }

}

const deleteUserService = async (telephone) => {
  try {

    const data = await userRepository.deleteUserById(telephone);

    if (data) {
      return {
        statusCode: 200,
        data: data
      }
    }

  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message
    }
  }
}
//  Tornando as funções disponíveis para outros arquivos
module.exports = {
  createUser,
  getUsers,
  getUserByTelephoneAndPassword,
  loginService,
  deleteUserService

}