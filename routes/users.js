const routes = require('express').Router();
const UserController = require('../controllers/users.js')
const ProjectController = require('../controllers/projects.js')

routes.get('/login', UserController.loginForm) 

routes.post('/login', UserController.login) 

// routes.get('/:UserId/allProjects', UserController.readAll) 

routes.get('/:UserId/allProjects/:ProjectId/donate', UserController.donateForm) 

routes.post('/:UserId/allProjects/:ProjectId/donate', UserController.donate) 


// routes.post('/register', UserController.registerCompleted)

// routes.get('/:ProjectId/addDonation', UserController.addDonation)

module.exports = routes;