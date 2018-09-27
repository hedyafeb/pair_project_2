const routes = require('express').Router();
const { Project } = require('../models/index.js') 

class ProjectController {
    static readAll(req, res) {
        Project.findAll()
        .then( projects => {
            res.send(projects)
            // res.render('projects_list.ejs', {projects})
        })
        .catch( err => {
            res.send(err)
        })
    }
}



module.exports = ProjectController