const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/userController');

const VerifyToken = require('../utils/VerifyToken');

/*


*/
routerUsers.post('/login', userController.login);
routerUsers.post('', userController.postUser);
routerUsers.get('', VerifyToken, userController.getUser);
routerUsers.get('/:telephone/:password', VerifyToken, userController.getUserByTelephoneAndPassword);

module.exports = routerUsers;
