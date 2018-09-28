const routes = require('express').Router();
const { User } = require('../models/index.js') 
const { Project } = require('../models/index.js') 
const { Transaction } = require('../models/index.js') 

class ProjectController {
    static readAll(req, res) {
        Project.findAll(
            { include: {model: Transaction} }
        )
        .then( projects => {
            // res.send(projects)
            res.render('public_projects_list.ejs', {projects})
        })
        .catch( err => {
            res.send(err)
        })
    }

    


    // sampai siniii!!! hitung amount!!
    // static currentAmount(req, res) {
    //     Project.findAll(
    //         // {include: {model: Transaction}}
    //     )
    //     .then( data => {
    //         res.send(data)
    //     })
    //     .catch( err => {
    //         res.send(err)
    //     }) 
    // }

}



module.exports = ProjectController