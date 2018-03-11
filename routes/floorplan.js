const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const Project = require('../models/project');
const User = require('../models/user');
const dbConfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;
const Image = require('../models/image');


router.get('/:id/:projectId', passport.authenticate('jwt', {session:false}), (req, res, next) => {


    let presentUser = req.user;
    if(presentUser)
    {
        Project.getFloorPlanFromProject(ObjectId(req.params.id),ObjectId(req.params.projectId), (err, floorplan)=>{

            if(err)
            {
                console.error(err);
                res.send({success: false, msg: err.message});
            }
            else
            {

                for(let i = 0; i < project.floorPlans.length; i++)
                {
                    let floorPlan = project.floorPlans[i];
                    images.push(new Image(floorPlan));
                }
                let image = new Image(floorplan);

                floorplan = JSON.parse(JSON.stringify(floorplan));
                floorplan.image = image;
                res.send({success: true, floorPlan: floorplan});
            }

        });
    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }




});

module.exports = router;