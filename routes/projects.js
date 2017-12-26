const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Project = require('../models/project');
const User = require('../models/user')
const dbConfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;


//Register
router.post('/register', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {
        if(presentUser.roles.manage_projects)
        {
            let newProject = new Project({
                name: req.body.name,
                email: req.body.email,
                description: req.body.description
            });

            Project.addProject(newProject, (err, project) => {
                if (err) {
                    console.error(err, 'Uncaught Exception thrown');
                    res.json({success: false, msg: 'Failed to register Project'});
                }
                else {
                    res.json({success: true, msg: 'Project registered'})
                }
            });

        }

    }
    else
    {
        res.json({success:false, msg: 'NotAuthorized'});
    }
});


router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {

        if(presentUser.isadmin)
        {

            Project.getAllProject((err, result) => {

                if (err) {
                    console.error(err, 'Uncaught Exception thrown');
                    res.send([]);
                    return
                }

                var projects = [];

                result.forEach(function (project) {
                    projects.push({
                        _id: project._id,
                        name: project.name,
                        email: project.email,
                        description: project.description,
                    });
                });

                res.send(projects);
            });

        }
    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});

router.get('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let presentUser = req.user;
    if(presentUser.isadmin) {

        Project.getProjectByID(ObjectId(req.params.id), (err, project)=>{

            if(err)
            {
                console.error(err);
                res.send({success: false, msg: err.message});
            }
            else
            {
                res.send({success: true, project: project});
            }

        });



    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});

router.patch('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
        if(presentUser.isadmin && presentUser.roles.manage_projects)
        {
                query =    {
                    "name" : req.body.name,
                    "email" : req.body.email,
                    "description" : req.body.description
                };

                Project.updateProject(ObjectId(req.params.id),query, (err, project)=>{
                    if(err)
                    {
                        console.error(err);
                        res.send({success: false, msg: err.message});
                    }
                    else
                    {
                        res.send({success: true, project: project});
                    }
                });
        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }
    }

    else{
        res.send(401);
    }

});


router.delete('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
        //Check if user can actually access such data
        if(presentUser.roles.manage_users && presentUser.roles.manage_roles && presentUser.roles.manage_projects && presentUser.isadmin)
        {
            Project.deleteProject(ObjectId(req.params.id), (err)=>{
                if(err)
                {
                    console.error(err);
                    res.send({success: false, msg: err.message});
                }
                else
                {
                    res.send({success: true});
                }
            });
        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }
    }

    else{
        res.send(401);
    }

});


module.exports = router;