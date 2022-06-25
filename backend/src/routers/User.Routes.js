const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/userController');
const VerifyToken = require('../middleware/VerifyToken');

/*


*/
routerUsers.post('/login', userController.login);
routerUsers.post('', userController.postUser);
routerUsers.get('', VerifyToken, userController.getUser);
routerUsers.get('/:telephone/:password', VerifyToken, userController.getUserByTelephoneAndPassword);
routerUsers.delete('/:telephone', VerifyToken, userController.deleteUser);

module.exports = routerUsers;
