const routes = require('express').Router();
const AdminController = require('../controllers/admins.js')


routes.get('/login', AdminController.login)
routes.post('/login', AdminController.loginSuccess)


// routes.get('/userlist', AdminController.readAllUsers) 
routes.get('/transactionlist', AdminController.readAllTransactions) 
routes.get('/transactions', AdminController.createTransactionForm)
routes.post('/transactions', AdminController.createTransaction)
routes.get('/transactions/:ProjectId/user/:UserId/approved', AdminController.approveTransaction)
routes.get('/transactions/:ProjectId/user/:UserId/rejected', AdminController.rejectTransaction)
routes.get('/projects/add', AdminController.addProjectForm)
// post yg add blom


routes.get('/projects', AdminController.readAllProjects)
routes.get('/projects/:id/edit', AdminController.updateProjectForm)
routes.post('/projects/:id/edit', AdminController.updateProject)

routes.get('/users', AdminController.readAllUsers)

routes.get('/users/:id/edit', AdminController.updateUserForm)
routes.post('/users/:id/edit', AdminController.updateUser)

routes.get('/users/add', AdminController.addUser)
routes.post('/users/add', AdminController.saveUser)

module.exports = routes;


