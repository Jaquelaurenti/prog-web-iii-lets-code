
/**
 * // Esse arquivo ele vai ser responsável por validar todos os tokens recebidos na requisição
 */

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  // primeira coisa a ser feita buscar o header onde o token está sendo armazenado

  const token = req.headers['x-access-token']; // define onde o token deverá ser armazenado

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "Não foi encontrado o header x-acess-token"
    })
  }

  // se ele encontrou o header token
  // preciso verificar o conteúdo do token

  jwt.verify(token, 'letsCode',
    function (err, decoded) {
      if (err) {
        return res.status(500).json({
          auth: false, message: "Falha ao autenticar o Token"
        });
        // se tudo estiver ok com a verificação do meu token
        console.log(decoded);
        req.telphone = decoded.userData.telephone;
        next();
      }

    })
}