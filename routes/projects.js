const routes = require('express').Router();
const ProjectController = require('../controllers/projects.js')

routes.get('/', ProjectController.readAll) 

routes.get('/:projectId', ProjectController.addDonationForm) 
routes.post('/:projectId/donationProcessed', ProjectController.donationProcessed)

module.exports = routes;