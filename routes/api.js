const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Project = require('../models/project');
const ProjectToken = require('../models/projectokens');


const User = require('../models/user');
const dbConfig = require('../config/db');


var ObjectId = require('mongodb').ObjectID;
const Image = require('../models/image');

const Content = require("../models/content");

// Authenticate
router.post('/authenticate', (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {

        if (err) {
            //throw err;
            console.error(err, 'Uncaught Exception thrown');
            return res.json({success: false, msg: 'Wrong Password ' + err.message});
        }

        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                //throw err;
                console.log(err);
                res.send("Error occurred comparing password: " + err);
                return;
            }

            if (isMatch) {
                console.log({data: user});
                const token = jwt.sign({data: user}, dbConfig.secret, {

                    expiresIn: 604800 //1 Week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
//                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        isadmin: user.isadmin
                    }
                });
            }

            else {
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });

    })
    ;

});


router.get('/projects', passport.authenticate('jwt', {session: false}), (req, res, next) => {

    try {

        let presentUser = req.user;

        if (presentUser) {

            Project.getAllProjectForUser(ObjectId(presentUser._id), (err, result) => {

                if (err) {
                    console.error(err, 'Uncaught Exception thrown');
                    res.send([]);
                    return
                }

                var projects = [];


                result.forEach(function (project) {

                    var floorPlans = [];
                    project.floorPlans.forEach((floorplan) => {

                        let image = new Image(floorplan);
                        let f = {
                            _id: floorplan._id,
                            name: floorplan.name,
                            url: image.url,
                            beacons: floorplan.beacons,
                            created: floorplan.created
                        };

                        if (floorplan.updated)
                            f.updated = floorplan.updated;
                        floorPlans.push(f);

                    });

                    let p = {
                        _id: project._id,
                        name: project.name,
                        email: project.email,
                        description: project.description,
                        floorPlans: floorPlans,
                        created: project.created
                    };

                    if (project.updated)
                        p.updated = project.updated;

                    projects.push(p);
                });

                res.send(projects);
            });


        }
        else {
            res.send({success: false, msg: 'Not Authorized'});
        }
    }
    catch (e) {
        console.log(e);
        res.send(500);
    }


});

//UPLOAD BEACONS
router.post('/upload/:projectId/:floorplanId', passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let presentUser = req.user;

    if (presentUser) {

        //Check if user can actually access such data
        if (presentUser.isadmin) {

            items = {
                beacons: req.body,
                areas: []
            };

            console.log(items);

            Project.saveBeaconsIntoFloorPlan(ObjectId(req.params.floorplanId), ObjectId(req.params.projectId), items, (err) => {

                if (err) {
                    res.send({success: false, msg: err.message});
                }
                else {

                    Project.getFloorPlanFromProject(ObjectId(req.params.floorplanId),
                        ObjectId(req.params.projectId),
                        (err, project, floorplan) => {

                            if (err != null) {
                                res.send({success: false, msg: err.message});
                            }

                            res.send({success: true, beacons: floorplan.beacons});


                        });

                }

            });

        }
        else {
            res.send({success: false, msg: "Not Permitted"});
        }
    }

    else {
        res.sendStatus(401);
    }

});

//UpdateBeacon
router.post('/update/beacon/:projectId/:floorplanId/:beaconId', passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let presentUser = req.user;

    if (presentUser) {

        //Check if user can actually access such data
        if (presentUser.isadmin) {

            beacon = req.body;

            Project.updateBeaconInFloorPlan(ObjectId(req.params.floorplanId), ObjectId(req.params.projectId), beacon, (err, beacon) => {

                if (err) {
                    res.send({success: false, msg: err.message});
                }
                else {
                    res.send({success: true, beacon: beacon});

                }

            });


        }
        else {
            res.send({success: false, msg: "Not Permitted"});
        }
    }

    else {
        res.sendStatus(401);
    }

});


//save Content into Beacons and Content Areas
router.post('/sendmessage/:projectId/:floorplanId', passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let presentUser = req.user;

    if (presentUser) {

        Content.addContentToFloorPlan(ObjectId(req.params.floorplanId), ObjectId(req.params.projectId), presentUser._id, req.body, (err) => {

            if (err) {
                res.send({success: false, msg: err.message});
            }
            else {
                res.send({success: true});

            }

        });

    }

    else {
        res.sendStatus(401);
    }

});


/*************************************************/
/*************************************************/
/************ SDK API CALLS **********************/
/*************************************************/
/*************************************************/

//Pull BEACON UPDATE
router.post('/sdk/update', (req, res) => {

    let token = req.body.token;
    let beacon_update = req.body.beacon_update;
    let content_update = req.body.content_update;

    if (token === "") {
       return res.send({success: false, msg: "no token"});
    }
    else {

        Project.getProjectForToken(token, (err, projects) => {

            if (err) {
                return res.send({success: false, msg: "invalid Token"});
            }
            else {
                let data = {
                    beacons: [],
                    contents: [],
                    beacon_update_tag: beacon_update,
                    content_update_tag: content_update
                };



                if(projects.length > 0)
                {

                    project = projects[0];

                    project.floorPlans.forEach(floorplan => {

                        let maxbeaconTime = beacon_update;

                        floorplan.beacons.forEach(beacon => {

                            if (beacon.updated) {

                                let time = beacon.updated.getTime();

                                if (time > maxbeaconTime) {
                                    maxbeaconTime = time;
                                }


                                if (time > beacon_update) {
                                    data.beacons.push(beacon);
                                }

                            }
                        });
                        data.beacon_update_tag = maxbeaconTime;

                        Content.getContentsByProject(ObjectId(project._id), (err, contents) => {
                            if (!err) {

                                let maxContentTime = content_update;

                                contents.forEach(content => {

                                    if(content.updated){

                                        let time = content.published.getTime();

                                        if(time > maxContentTime)
                                        {
                                            maxContentTime = content.published.getTime();
                                        }


                                        if (time > content_update) {
                                            data.contents.push(content);
                                        }
                                    }


                                });

                                data.content_update_tag = maxContentTime;
                            }


                            return res.send({success: true, data: data});
                        });


                    })
                }
                else
                {
                   return res.send({success: false, msg: "project not found"});
                }


            }


        })

    }


});


router.post('/sdk/push', (req, res) => {

    let token = req.body.token;
    let fcm = req.body.fcm;

    if (token === "") {
        res.send({success: false, msg: "invalid project token"});
    }
    else {
        Project.getProjectForToken(token, (err, projects) => {

            if(err)
            {
                res.send({success: false, msg: "invalid token, project for token does not exist "+err.message});
            }
            else{

                let project = projects[0];

                console.log(projects);

                ProjectToken.insertTokenForProject(project._id, fcm, (err)=>{
                    if(err)
                        res.send({success: false, msg: err.message});
                    else
                        res.send({success: true});
                });

            }

        });
    }
});


router.post('/sdk/beaconseen', (req, res) => {

    let token = req.body.token;
    let beacon_id = req.body.beacon_id;

    let telemetry = req.body.telemetry;

    if (!token || token === "") {
        res.send({success: false, msg: "invalid project token"});
    }
    else {
        Project.updateBeaconSeenInFloorplan(token, ObjectId(beacon_id), telemetry, (err) => {

            if(err)
                res.send({success: false, msg: err.message});
            else
                res.send({success: true});


        });
    }
});





module.exports = router;