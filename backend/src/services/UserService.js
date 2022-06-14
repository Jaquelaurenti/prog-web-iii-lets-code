const userRepository = require('../repositories/UserRepository');

// trabalhando com um Objeto de retorno padrão
// statusCode (que vai armazenar o status da minha requisição)
// data (pode ser um objeto, mensagem)

const createUser = async (user) => {
  try {
    // criar validações para verificar o meu parametro user
    if (user) {
      return {
        // tratar esse erro na camada 4
        statusCode: 500,
        data: error.message
      }

    }
    // antes de criar o usuario eu preciso verificar se o mesmo já nao existe na base
    {
      return {
        // tratar esse erro na camada 2
        statusCode: 202,
        data: 'Usuário já inserido na base de dados'
      }

    }
    const data = userRepository.createUser(user);
    return {
      statusCode: 200,
      data: data
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message
    }
  }
}

const getUsers = async () => {
  try {
    const data = await userRepository.getUsers();
    return {
      statusCode: 200,
      data: data
    }
  }
  catch (error) {
    return {
      statusCode: 500,
      data: error.message
    }
  }
}

const getUserByTelephoneAndPassword = async (telephone, password) => {
}


// deixando os métodos disponíveis para uso
module.exports = {
  createUser, getUsers, getUserByTelephoneAndPassword
}
