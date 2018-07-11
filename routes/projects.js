const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Project = require('../models/project');
const User = require('../models/user');
const dbConfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;
const Image = require('../models/image');


const multer = require("multer");
const MAX_FILE_SIZE = 20000000;

//Upload


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

// List Projects
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

// Get Specific Project
router.get('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let presentUser = req.user;
    if(presentUser.isadmin) {

        Project.getProjectByID(ObjectId(req.params.id), (err, project)=>{


            if(err)
            {
                //console.error(err);
                res.send({success: false, msg: err.message});
            }
            else
            {
                let images = [];

                for(let i = 0; i < project.floorPlans.length; i++)
                {
                    let floorPlan = project.floorPlans[i];
                    images.push(new Image(floorPlan));
                }
                project = JSON.parse(JSON.stringify(project));
                project.floorPlans = images;

                res.send({success: true, project: project});
            }

        });



    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});

// Edit Project
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

// Store GCM Server Key
router.patch('/:id/gcm', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
        if(presentUser.isadmin && presentUser.roles.manage_projects)
        {
            let project_id = req.params.id;
             let  gcm = req.body.gcm;

            Project.updateGCMToken(ObjectId(project_id), gcm, (err)=>{

                if(err)
                {
                    console.log(err.message);
                    res.send({success: false, msg: err.message});
                }
                else {
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

// Delete Project
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
        res.sendStatus(401);
    }

});

//Add User to Project
router.post('/:id/adduser', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {

        if(presentUser.roles.manage_projects)
        {
            let projectId =  req.params.id;
            User.getUserByID(ObjectId(req.body._id), (err, user)=>{

                if(err)
                {
                    res.send({success: false, msg : err.message});
                    console.error(err);
                }

                else
                {
                    Project.addUserToProject(ObjectId(projectId), ObjectId(user._id), (err, nmods)=>{

                            if(err)
                            {
                                res.send({success: false, msg : err.message});
                            }
                            else
                            {
                                if(nmods>0)
                                {
                                    Project.getProjectByID(projectId, (err, project)=>{
                                        if(err)
                                        {
                                            res.send({success:false, msg : "Error occurred retrieving updated list"});
                                        }
                                        else
                                        {
                                            res.send({success: true, users : project.users});
                                        }
                                    });

                                }
                                else
                                {
                                    res.send({success: false, msg : "user already added"});
                                }
                            }
                    });
                }


            });


        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }

    }
    else
    {
        res.sendStatus(401);
    }



});

//Add User to Project
router.post('/:id/removeuser', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {

        if(presentUser.roles.manage_projects)
        {
            let projectId =  req.params.id;
            User.getUserByID(ObjectId(req.body._id), (err, user)=>{

                if(err)
                {
                    res.send({success: false, msg : err.message});
                    console.error(err);
                }

                else
                {
                    Project.removeUserFromProject(ObjectId(projectId), ObjectId(user._id), (err, nmods)=>{

                        if(err)
                        {
                            res.send({success: false, msg : err.message});
                        }
                        else
                        {
                            if(nmods>0)
                            {
                                res.send({success: true});


                                /* EXTRA DB call not needed
                                Project.getProjectByID(projectId, (err, project)=>{
                                    if(err)
                                    {
                                        res.send({success:false, msg : "Error occurred retrieving updated list"});
                                    }
                                    else
                                    {
                                        res.send({success: true, users : project.users});

                                    }
                                });
                                */

                            }
                            else
                            {
                                res.send({success: false, msg : "user already removed"});
                            }
                        }
                    });
                }


            });


        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }

    }
    else
    {
        res.sendStatus(401);
    }



});



//IMAGE _ PART

//Add Image to Project
router.post('/:id/upload', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
        if(presentUser.roles.manage_projects)
        {
            let projectId =  req.params.id;
            Project.getProjectByID(ObjectId(projectId), (err, project)=>{

                if(err)
                {
                    res.send({success: false, msg : err.message});
                    console.error(err);
                }
                else
                {
                    const multerConf = {

                        storage : multer.diskStorage({
                            destination: function (req, file, cb) {
                                cb(null, 'uploads/floorplans/')
                            },
                            filename: function (req, file, cb) {
                                let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
                                cb(null, "plan"+ '-' + projectId + '-' + Date.now()+ext);
                            }
                        }),
                        limit : {
                            fileSize : MAX_FILE_SIZE
                        },
                        fileFilter: function (req, file, next) {
                            if(!file)
                            {
                                next();
                            }

                            const image = file.mimetype.startsWith('image/');

                            if(image)
                            {
                                next(null, true);
                            }
                            else
                            {
                                next({message: "File type not supported"}, false);
                            }
                        }

                    };

                    var upload = multer(multerConf).array("imageInput",12);

                    upload(req, res, function (err){

                        if(err)
                        {
                            console.log("Error occurred "+ err.message)
                            res.send({success: false, msg: err.message});
                        }
                        else
                        {
                            Project.addImageToProject(ObjectId(projectId), req.files,ObjectId(presentUser._id), (err, nmods)=>{

                                if(err)
                                {
                                    res.send({success: false, msg : err.message});
                                }
                                else
                                {
                                    if(nmods>0)
                                    {
                                        res.send({success: true});


                                    }
                                    else
                                    {
                                        res.send({success: false, msg : "Did not upload for some odd reasons"});
                                    }
                                }
                            });
                        }

                    });
                }


            });


        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }

    }
    else
    {
        res.sendStatus(401);
    }



});

//Get Images
router.get('/:id/images', passport.authenticate('jwt', {session:false}), (req, res, next) => {
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
                 let images = [];
                 for(let i = 0; i < project.floorPlans.length; i++)
                 {
                     let floorPlan = project.floorPlans[i];
                     images.push( new Image(floorPlan));
                 }

                res.send({success: true, images: images});
            }

        });



    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});

module.exports = router;


// FRONT-END
router.get('/foruser/:userId', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {

        Project.getAllProjectForUser(ObjectId(req.params.userId),(err, result) => {

            if (err) {
                console.error(err, 'Uncaught Exception thrown');
                res.send([]);
                return
            }

            var projects = [];


            result.forEach(function (project) {

                var floorPlans = [];
                project.floorPlans.forEach((floorplan)=>{

                    floorPlans.push({
                        _id: floorplan._id,
                        name: floorplan.name
                    })

                });


                projects.push({
                    _id: project._id,
                    name: project.name,
                    email: project.email,
                    description: project.description,
                    floorPlans: floorPlans
                });
            });

            res.send(projects);
        });


    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});