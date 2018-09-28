// ADMIN!!

const routes = require('express').Router();
const { User } = require('../models/index.js') 
const { Transaction } = require('../models/index.js') 
const { Project } = require('../models/index.js') 

class AdminController {
    static login(req, res) {
        res.render('login_admins.ejs')
    }

    static loginSuccess(req, res) {
        User.findOne({
            where: {email: req.body.email, password: req.body.password, role: "admin"} 
        })
        .then( admin => {
            if (admin) {
                res.redirect('/admins/transactionlist')
            }
            else {
                res.send('anda bukan admin')
            }
            
        })
        .catch( err => {
            res.send(err)
        })
    }


    static readAllTransactions(req, res) {
        Transaction.findAll({
            order: [['id','ASC']]
        })
        .then( transactions => {
            // res.send(transactions)
            res.render('transaction_list.ejs', {transactions})
        })
        .catch( err => {
            res.send(err)
        })
    }

    static createTransactionForm(req, res) {
        res.render('transaction_form.ejs')
    }

    static createTransaction(req, res) {
        Transaction.create(req.body)
        .then( data => {
            res.redirect('/admins/transactionlist')
        })
        .catch( err => {
            res.send(err)
        })
    }




    static approveTransaction(req, res) {
        Transaction.update(
            { status: 'approved' }, 
            { where: {id: req.params.transactionId  }
        })
        .then( () => {
            res.redirect('/admins/transactionlist')
        })
        // .then( () => {
        //     Project.findOne({
        //         where: {id: req.params.ProjectId}
        //     })
        //     .then( project => {
        //         project.currentAmmount += Number(Transaction.amount) 
        //         project.save()
        //     }).then(() => {
        //         res.render('users_thankyou.ejs')
        //     })
        // })
        .catch( err => {
            res.send(err)
        })
    }

    static rejectTransaction(req, res) {
        Transaction.update(
            { status: 'rejected' }, 
            { where: {id: req.params.transactionId }
        })
        .then( () => {
            res.redirect('/admins/transactionlist')
        })
        .catch( err => {
            res.send(err)
        })
    }

    static addProjectForm(req,res){
        res.render('add-project.ejs')
    }

    static saveProject(req,res){
        Project.create({
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


    static updateProjectForm(req, res) {
        Project.findOne({
            where: {id: req.params.id}
        })
        .then( data => {
            res.render('edit-project.ejs', {data})
        })
        .catch( err => {
            res.send(err)
        })
        
    }

    static updateProject(req,res){
        Project.update({
            name:req.body.name,
            description:req.body.description,
            target:req.body.target,
            currentAmmount:req.body.current_amount
        },
        {where:{id:req.params.id}})
        .then(function(){
            res.redirect('/admins/projects')
        })
        .catch(function(err){
            res.send(err.message)
        }) 
    }

    static readAllProjects(req, res) {
        Project.findAll()
        .then( projects => {
            // res.send(projects)
            res.render('projects_list.ejs', {projects})
        })
        .catch( err => {
            res.send(err)
        })
    }


    static readAllUsers(req, res) {
        User.findAll()
        .then(data => {
            // res.send(data) 
            res.render('user-lists.ejs', {data})
        })
        .catch( err => {
            res.send(err)
        })
    }


    static updateUserForm(req, res) {
        User.findOne({
            where: {id: req.params.id}
        })
        .then( data => {
            res.render('edit-users.ejs', {data})
        })
        .catch( err => {
            res.send(err)
        })
        
    }

    static updateUser(req,res){
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

    static addUser(req,res){
        res.render('add-users.ejs')
    }

    static saveUser(req,res){
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        .then(function(){
            res.redirect('/admins/users')
        })
        .catch(function(err){
            res.send(err.message)
        })
    }

}



module.exports = AdminController
