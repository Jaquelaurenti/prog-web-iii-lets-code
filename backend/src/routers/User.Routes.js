const express = require('express');
const routersUsers = express.Router();


const userController = require('../controllers/UserController');

routersUsers.post('', userController.postUsuario);
routersUsers.get('', userController.getUsers);

module.exports = routersUsers;
