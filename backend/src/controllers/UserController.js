const { param } = require('../routers/User.Routes');
const userService = require('../services/UserService');

const postUsuario = async (req, res) => {
  const payload = req.body;
  const token = req.headers['x-api-key'];
  console.log(token)
  const user = await userService.createUser(payload);
  return res.status(200).json(user);

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
