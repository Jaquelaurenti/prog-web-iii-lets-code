const express = require('express');
const routesUsers = express.Router();
const verifyJWT = require('../middleware/verifyToken');

// importando o controller
const UserController = require('../controllers/UserController');
routesUsers.get('', verifyJWT, UserController.index);
routesUsers.post('/login', UserController.logon);
routesUsers.post('', UserController.store);
routesUsers.put('/:telephone', verifyJWT, UserController.update);
routesUsers.delete('/:telephone', verifyJWT, UserController.destroy);
routesUsers.post('/refreshtoken', verifyJWT, UserController.refreshToken);



module.exports = routesUsers;
