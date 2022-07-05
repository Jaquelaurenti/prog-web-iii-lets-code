const User = require('../models/Users');


const findUserByTelephone = async (telephone) => {
  return await User.findOne({ telephone: telephone });
}
const findUserByTelephoneAndPassWord = async (telephone, password) => {
  const response = await User.findOne({ telephone: telephone, password: password });
  return response;
}

const createUser = async (user) => {
  return await User.create(user);
}
const findUserById = async (id) => {
  return await User.findById({ _id: id });
}
const findUser = async (page) => {
  return await User.paginate({}, { page, limit: 10 });
}
const findByIdAndUpdate = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true })
}
const findByIdAndRemove = async (id) => {
  return await User.findByIdAndRemove(id);
}

module.exports = {
  findUserByTelephone,
  findUserByTelephoneAndPassWord,
  createUser,
  findUserById,
  findUser,
  findByIdAndUpdate,
  findByIdAndRemove
}
