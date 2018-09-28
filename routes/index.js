const routes = require('express').Router();
const projects = require('./projects.js');
const users = require('./users.js');
const admins = require('./admins.js');

routes.get('/', function (req, res) {
    res.render("index.ejs") 
  })

routes.use('/users', users) 
routes.use('/projects', projects) 
routes.use('/admins', admins)  

module.exports = routes;