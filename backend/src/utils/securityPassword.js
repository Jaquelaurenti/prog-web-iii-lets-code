const bcrypt = require('bcryptjs');

// SALT
// determina a quantidade de pulos que a criptografia vai usar para gerar o HASH
const salt = bcrypt.genSaltSync(10);

const encrypt = (password) => {
  return bcrypt.hashSync(password.toString(), salt);
}

const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password.toString(), hash);
}

module.exports = {
  encrypt, verifyPassword
}