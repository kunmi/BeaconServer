const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var fs = require('fs');


const Project = require('../models/project');
const User = require('../models/user');
const dbConfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;
const Image = require('../models/image');


router.get('/:id/project/:projectId', passport.authenticate('jwt', {session:false}), (req, res, next) => {


    let presentUser = req.user;
    if(presentUser)
    {


        Project.getFloorPlanFromProject(ObjectId(req.params.id),ObjectId(req.params.projectId), (err, project, floorplan)=>{

            if(err)
            {
                console.error(err);
                res.send({success: false, msg: err.message});
            }
            else
            {

                let image = new Image(floorplan);

                floorplan = JSON.parse(JSON.stringify(floorplan));


                result = {};
                floorplan.url = image.url;

                result.floorplan = floorplan;
                result.project = JSON.parse(JSON.stringify(project));


                    res.send({success: true, data: result});
            }

        });
    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }




});

// Delete Project
router.delete('/:id/project/:projectId', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
        //Check if user can actually access such data
        if(presentUser.roles.manage_users && presentUser.roles.manage_roles && presentUser.roles.manage_projects && presentUser.isadmin)
        {

            Project.getFloorPlanFromProject(ObjectId(req.params.id),ObjectId(req.params.projectId), (err, project, floorplan)=>{

                if(err)
                {
                    console.error(err);
                    res.send({success: false, msg: err.message});
                }
                else
                {

                    let path = floorplan.path;

                    Project.deleteFloorplanWithId(ObjectId(req.params.id), ObjectId(req.params.projectId) , (err, modified)=>{
                        if(err)
                        {
                            console.error(err);
                            res.send({success: false, msg: err.message});
                        }
                        else
                        {
                            fs.unlink(path, (error)=>{
                                if(error)
                                {
                                    console.log(error);
                                }
                            });
                            res.send({success: true});
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

    else{
        res.sendStatus(401);
    }

});


module.exports = router;