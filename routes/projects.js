const routes = require('express').Router();
const ProjectController = require('../controllers/projects.js')

routes.get('/', ProjectController.readAll) 

routes.get('/add', ProjectController.add)

routes.post('/add', ProjectController.save)

routes.get('/:id/delete', ProjectController.delete)

routes.get('/:id/edit', ProjectController.getId)

routes.post('/:id/edit', ProjectController.update)



// routes.get('/:projectId', ProjectController.addDonationForm) 
// routes.post('/:projectId/donationProcessed', ProjectController.donationProcessed)

module.exports = routes;