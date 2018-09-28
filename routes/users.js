const routes = require('express').Router();
const UserController = require('../controllers/users.js')

routes.get('/', UserController.readAll) 

routes.get('/add', UserController.add) 

routes.post('/add', UserController.save) 

routes.get('/:id/delete', UserController.delete) 

routes.get('/:id/edit', UserController.getId) 

routes.post('/:id/edit', UserController.update) 

routes.get('/projects', UserController.findAllProjects) 

routes.get('/donate', UserController.donate) 

routes.post('/donate', UserController.addDonate) 

// routes.get('/register', UserController.registerForm) 
// routes.post('/register', UserController.registerCompleted)
// routes.get('/login', UserController.loginForm)
// routes.get('/login/', UserController.) // after login gmn??

module.exports = routes;