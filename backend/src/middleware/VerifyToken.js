const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  // busca do header que será armazenado o token
  const token = req.headers['x-access-token']; //  eu que determino o nome do token que será utilizado para armazenar a autorização

  // se o header não for encontradoß
  if (!token) return res.status(401).json({ auth: false, message: 'Não foi encontrado o header x-access-token' });

  // no lugar do letsCode podemos pegar do arquivo .env
  // aqui eu valido o conteúdo do que foi inserido no token
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    // função de callback para validar a verificação do token
    if (err) return res.status(500).json({ auth: false, message: 'Falha ao atenticar o Token' });

    // se tudo estiver ok, salva no request para uso posterior
    console.log(decoded)
    req.telephone = decoded.userData.telephone;
    // Função de middleware para seguir após a finalização dessa função
    // Seguir com a execução de quem acionou
    next();
  });
}

