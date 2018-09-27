const routes = require('express').Router();
const UserController = require('../controllers/users.js')

routes.get('/', UserController.readAll) 

routes.get('/register', UserController.registerForm) 
routes.post('/register', UserController.registerCompleted)
routes.get('/login', UserController.loginForm)
// routes.get('/login/', UserController.) // after login gmn??

module.exports = routes;