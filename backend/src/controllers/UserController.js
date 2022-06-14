const { param } = require('../routers/User.Routes');
const userService = require('../services/UserService');

const postUsuario = async (req, res) => {
  const payload = req.body;
  const response = await userService.createUser(payload);
  return res.status(response.statusCode).json(response.data);

}
const getUsers = async (req, res) => {
  console.log(req)
  const users = await userService.getUsers();
  return res.status(200).json(users);

}

const getUserByTelephoneAndPassword = async (req, res) => {
  const { password, telephone } = req.headers;

  const user = await userService.getUserByTelephoneAndPassword(telephone, password);
  return res.status(200).json(user);
}

module.exports = {
  postUsuario, getUsers, getUserByTelephoneAndPassword
}
