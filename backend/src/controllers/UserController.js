const userService = require('../services/UserService');

const postUsuario = async (req, res) => {
  const payload = req.body;
  const user = await userService.createUser(payload);
  return res.status(200).json(user);

}
const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);

}

module.exports = {
  postUsuario, getUsers
}
