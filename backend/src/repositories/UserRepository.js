// Instanciando o mongo para trabalhar com a entidade
// Camada de repository é responsável somente por transacionar o banco de dados.


const mongoose = require('mongoose');
const User = mongoose.model('User');

const createUser = async (user) => {
  const response = await User.create(user);
  return response;
}

const getUsers = async () => {
  const response = await User.find({});
  return response;
}

const getUserByTelephoneAndPassword = async (telephone, password) => {
  const response = await User.findOne({ telephone: telephone, password: password });
  return response;
}

const getUserByEmail = async (email) => {
  const response = await User.findOne({ email: email });
  return response;
}

const getUserByTelephone = async (telephone) => {
  const response = await User.findOne({ telephone: telephone });
  return response;
}

const deleteUserById = async (userPhone) => {
  //return await User.deleteOne({ telephone: userPhone });
  return await User.findOneAndRemove({ telephone: userPhone });
}

module.exports = {
  createUser,
  getUsers,
  getUserByTelephoneAndPassword,
  getUserByEmail,
  getUserByTelephone,
  deleteUserById
}
