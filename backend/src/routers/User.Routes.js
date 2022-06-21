const express = require('express');
const routerUsers = express.Router();
const userController = require('../controllers/userController');

// acrescentar o veirfy

routerUsers.post('/login', userController.login);
routerUsers.post('', userController.postUser);
routerUsers.get('', userController.getUser);
routerUsers.get('/:telephone/:password', userController.getUserByTelephoneAndPassword);

module.exports = routerUsers;
