const userService = require('../services/UserService');

const postUsuario = async (req, res) => {
  const payload = req.body;
  const response = await userService.createUser(payload);
  return res.status(response.statusCode).json(response.data);

}
const getUsers = async (req, res) => {
  const response = await userService.getUsers();
  return res.status(response.statusCode).json(response.data);

}

const getUserByTelephoneAndPassword = async (req, res) => {
  const { telephone, password } = req.params;
  const response = await userService.getUserByTelephoneAndPassword(telephone, password);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
  postUsuario, getUsers, getUserByTelephoneAndPassword
}
