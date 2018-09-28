const routes = require('express').Router();
const { User } = require('../models/index.js') 
const { Project } = require('../models/index.js') 
const { Transaction } = require('../models/index.js') 


class UserController {
    static loginForm(req, res) {
        res.render('login_users.ejs')
    }

    static login(req, res) {
        User.findOne({
            where: {email: req.body.email, password: req.body.password, role: 'user'}
        })
        .then( user => {
            if (user) {
                Project.findAll()
                .then( projects => {
                    // res.send(user)
                    res.render('user_project_list.ejs', {projects, user })
                })
            }
            else {
                res.send('Maaf, email atau password anda salah')
            }
        })
        .catch( err => {
            res.send(err)
        })
    }

    // iini ga kepake deh kyknya
    static readAll(req, res) {
        User.findAll()
        .then(data => {
            // res.send(data) 
            res.render('user-lists.ejs', {data})
        })
        .catch( err => {
            res.send(err)
        })
    }


    static donateForm(req, res) {
        Project.findOne(
            { where: { id: req.params.ProjectId} }
        )
        .then( project => {
            res.render('user_donate_form.ejs', {project, ProjectId: req.params.ProjectId, UserId: req.params.UserId} )
        })
        .catch( err => {
            res.send(err)
        })
    }

    static donate(req, res) { 
        Transaction.create(
            { ProjectId: req.params.ProjectId, 
                UserId: req.params.UserId,
                amount: req.body.amount,
                status: 'pending'
            }
        )
        .then( () => {
            res.render('users_thankyou.ejs')
        })
        .catch( err => {
            res.send(err)
        })
    }

}



module.exports = UserController
