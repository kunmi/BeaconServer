const mongoose = require("mongoose");
const dbconfig = require('../config/db');
const User = require('./user');
var hat = require('hat');
var ObjectId = require('mongodb').ObjectID;

const FloorPlan = require("./floorplan");
const FloorPlanSchema =  mongoose.model('FloorPlan').schema;

const  Beacon = require("./beacon");


//Project Schema
const ProjectSchema =mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    description : {
        type: String
    },
    token: {
        type: String
    }
    ,
    users: [
            {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref : User,
                unique: true
            },
            token: String }
        ]
    ,
    floorPlans : [FloorPlanSchema]
});

const Project = module.exports = mongoose.model('Project', ProjectSchema );



module.exports.getProjectByID = function (id, callback) {
    //
    // you can select the post without any comments also
    //db.posts.find({_id: 54}, {comments: -1})
    Project.findById(id, callback);
};

module.exports.addProject = function (newProj, callback) {
    newProj.save(callback);
};

module.exports.updateProject = function (id,query, callback){
    Project.findOneAndUpdate({_id: id}, query, {upsert: true},callback);
};

module.exports.deleteProject = function (id, callback) {
    Project.findByIdAndRemove(id, {}, callback);
};

module.exports.getAllProject = (callback)=>{
    Project.find({},callback);
};

/************ USER -> Project ***************************/
module.exports.addUserToProject =  function(id, user, callback){

    Project.update({
        _id: id,
        'users.user_id': {
            $ne: user
        }
    }, {
        $push: {
            users: {
                user_id: user,
                token: hat()
            }
        }
    }).then((raw) => {
        callback(null,raw.nModified);
    }).catch(error=>{
            callback(error, null);
    });

};

module.exports.removeUserFromProject =  function(id, user, callback){

    Project.update({
        _id: id,
        'users.user_id': {
            $eq: user
        }
    }, {
        $pull: {
            users: {
                user_id: user
            }
        }
    }).then((raw) => {
        callback(null,raw.nModified);
    }).catch(error=>{
        callback(error, null);
    });

};


/*  IMAGE IMPORT  */
module.exports.addImageToProject = function (id, files, userId, callback) {

    let floorplans = [];
    for(let i=0; i<files.length; i++)
    {
        floorplans.push(FloorPlan.newFloorPlan(files[i], userId));
    }

    Project.update({
        _id: id
    }, {
        $push: {
            floorPlans : {
                $each: floorplans
            }
        }
    }).then((raw) => {
        callback(null,raw.nModified);
    }).catch(error=>{
        callback(error, null);
    });
};

/* Floor Plan Related */

module.exports.getFloorPlanFromProject = function (floorPlanId, projectId, callback) {
    Project.findById(projectId).then((project) => {
        callback(null,project,project.floorPlans.id(floorPlanId));
    }).catch(error =>{
        callback(error, null);
    });
};


module.exports.saveFloorPlanName = function (id, projectId, name, callback) {
    Project.update(
        { "_id": projectId, "floorPlans._id":id },
        { "$set": { "floorPlans.$.name": name.name } })
        .then((raw) =>
            {
                callback(null,raw.nModified);
            })
        .catch(error=>{
            callback(error, null);
        });
};

module.exports.saveBeaconsIntoFloorPlan = function (floorPlanId, projectId, models, callback) {
    let newBeacons = [];
    let preExistingBeacons = [];

    for(let i=0; i<models.length; i++)
    {
        let b = models[i];
        let beacon = new Beacon.Beacon();

        if(b.type.toLowerCase() === "ibeacon")
        {
            beacon =  FloorPlan.newIbeacon(b);
        }
        else
        {
            beacon = FloorPlan.newEddystoneBeacon(b);
        }

        if(b._id)
        {
            beacon._id = ObjectId(b._id);
            preExistingBeacons.push(beacon);
        }
        else
        {
            newBeacons.push(beacon);
        }

    }
    Project.findOne(projectId, (err,project)=>{

        const floorPlan = project.floorPlans.id(floorPlanId);

        for(let i=0; i< preExistingBeacons.length; i++)
        {
            let beacon = preExistingBeacons[i];
            let bs = floorPlan.beacons.id(beacon._id);
            bs.map.x = beacon.map.x;
            bs.map.y = beacon.map.y;
            bs.beacon = beacon.beacon;
            bs.save(err=>{
                if(err)
                console.log(err.message);
            });
        }

        for (let i=0; i< newBeacons.length; i++)
        {
            floorPlan.beacons.push(newBeacons[i]);
        }


        project.save((err) => {

            if(err)
            {
                console.log(err.message);
                callback(err);
            }
            else {
                 callback(null);
            }

        });

    });

};

