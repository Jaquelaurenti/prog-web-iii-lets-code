const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) => {
  // busca do header que será armazenado o token
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'Não foi encontrado o header x-access-token' });

  // no lugar do testeJaque podemos pegar do arquivo .env
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Falha ao atenticar o Token', messageError: err.message });
    req.userId = decoded.user._id;
    next();
  });
}

