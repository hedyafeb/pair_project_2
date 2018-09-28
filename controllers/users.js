const routes = require('express').Router();
const { User , Project } = require('../models/index.js') 

class UserController {
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

    static add(req,res){
        res.render('add-users.ejs')
    }

    static save(req,res){
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        .then(function(){
            res.redirect('/users')
        })
        .catch(function(err){
            res.send(err.message)
        })
    }

    static delete(req,res){
        User.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(function(){
            res.redirect('/users')
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    
    static getId(req,res){
        User.findById(req.params.id)
        .then(function(data){
            res.render('edit-users.ejs',{data})
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    static update(req,res){
        User.update({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        },
        {where:{id:req.params.id}})
        .then(function(){
            res.redirect('/users')
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    static findAllProjects(req,res){
        Project.findAll()
        .then(projects => {
            // res.send(data)
            res.render('project-lists-users', {projects})
        })
        .catch( err => {
            res.send(err)
        })
    }

    // static getDonate(req,res){
    //     User.findById(req.params.id)
    //     .then(function(data){
    //         res.render('form-donate.ejs',{data})
    //     })
    //     .catch(function(err){
    //         res.send(err.message)
    //     }) 
    // }

    static donate(req,res){
        User.findAll(/*{include: [{model: Project}]}*/)
        .then(function(dataUsers){
            Project.findAll(/*{include: [{model: Project}]}*/)
            .then(function(dataProjects){
                res.render('form-donate.ejs',{dataUsers,dataProjects})
            })
        })
        .catch(function(){

        })  
    }

    static addDonate(req,res){
        res.send('Pusing!!!!!!')
    }
}



module.exports = UserController