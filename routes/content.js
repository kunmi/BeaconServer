
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Project = require('../models/project');

const Content = require("../models/content");
var ObjectId = require('mongodb').ObjectID;

router.get('', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;
    if(presentUser)
    {
        if(presentUser.isadmin)
        {

            Content.getAllContents( (err, contents)=>{

                if(err)
                {
                    console.error(err);
                    res.send({success: false, msg: err.message});
                }
                else
                {
                    let c = JSON.parse(JSON.stringify(contents));
                    res.send({success: true, data: c});
                }

            });
        }
        else
        {
            res.send({success: false, msg: 'Not Authorized'});
        }


    }
    else
    {
        res.send({success: false, msg: 'Not Logged in'});
    }




});


//save Content into Beacons and Content Areas
router.post('/floorplan/:floorplanId/project/:projectId/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {

            Content.addContentToFloorPlan(ObjectId(req.params.floorplanId), ObjectId(req.params.projectId),presentUser._id, req.body, (err)=>{

                if(err)
                {
                    res.send({success: false, msg: err.message});
                }
                else
                {
                    res.send({success: true});

                }

            });

    }

    else{
        res.sendStatus(401);
    }

});



// Get Specific Project
router.get('/project/:projectId', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {
        Project.getProjectByID(ObjectId(req.params.projectId), (err, project)=>{


            if(err)
            {
                console.error(err);
                res.send({success: false, msg: err.message});
            }
            else
            {
                /*
                let floorplans =  [];

                project.floorPlans.forEach(floorplan=>{

                    let item = {
                        floorplan_id: floorplan._id,
                        floorplan_name: floorplan.name,
                        contents: []
                    };

                    Content.getContentsByFloorplan(ObjectId(floorplan._id), ObjectId(project_id), (err,contents)=>{
                        item.contents = contents;
                    });

                    floorplans.push(item);

                });
                */



                Content.getContentsByProject(ObjectId(project._id), (err, contents)=>{


                    if(err)
                    {
                        res.send({success: false, msg: err.message});
                    }
                    else
                    {
                        let data = [];

                        contents.forEach((c)=>{
                            let content = {
                                _id: c._id,
                                title: c.title,
                                body: c.body,
                                beacons: c.beacons,
                                areas: c.areas,
                                published: c.published
                            };

                            project.floorPlans.forEach((floorplan)=>{

                                if(JSON.stringify(floorplan._id) === JSON.stringify(c.floorplan_id))
                                {
                                    content.floorplan_name = floorplan.name;
                                    content.floorplan_id = floorplan._id;
                                }

                            });

                            data.push(content);


                        });

                        res.send({success: true, contents: data});
                    }


                });


            }

        });



    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});



//GET CONTENT DETAILS
router.get('/details/:contentId', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {

        Content.getContentDetails(ObjectId(req.params.contentId), (err, c)=>{

            if(err)
                res.send({success: false, msg: err.message});
            else
                res.send({success: true, content: c});

        });

    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});




module.exports = router;