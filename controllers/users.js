const routes = require('express').Router();
const { User } = require('../models/index.js') 

class UserController {
    static readAll(req, res) {
        User.findAll()
        .then( projects => {
            // res.send(projects)
            res.render('projects_list.ejs', {projects})
        })
        .catch( err => {
            res.send(err)
        })
    }

    static add(req,res){
        res.render('add-project.ejs')
    }

    static save(req,res){
        User.create({
            name:req.body.name,
            description:req.body.description,
            target:req.body.target,
            currentAmmount:req.body.current_ammount
        })
        .then(function(){
            res.redirect('/projects')
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
            res.redirect('/projects')
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    
    static getId(req,res){
        User.findById(req.params.id)
        .then(function(data){
            res.render('edit-project.ejs',{data})
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    static getId(req,res){
        User.findById(req.params.id)
        .then(function(data){
            res.render('edit-project.ejs',{data})
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    static update(req,res){
        User.update({
            name:req.body.name,
            description:req.body.description,
            target:req.body.target,
            currentAmmount:req.body.current_amount
        },
        {where:{id:req.params.id}})
        .then(function(){
            res.redirect('/projects')
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }
}



module.exports = UserController