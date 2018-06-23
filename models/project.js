
const mongoose = require("mongoose");
const dbconfig = require('../config/db');
const User = require('./user');
var hat = require('hat');
var ObjectId = require('mongodb').ObjectID;

const FloorPlan = require("./floorplan");
const FloorPlanSchema =  mongoose.model('FloorPlan').schema;

const  Beacon = require("./beacon");
const ContentArea = require("./contentarea");


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
                ref : User
            },
            token: String }
        ]
    ,
    floorPlans : [FloorPlanSchema],
    created: {
        type: Date,
        default: Date.now()
    },
    updated : {
        type: Date,
        default: Date.now()
    }
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

module.exports.saveBeaconsIntoFloorPlan = function (floorPlanId, projectId, items, callback) {

    let beacons = items.beacons;
    let areas = items.areas;


    let newBeacons = [];
    let preExistingBeacons = [];

    let newAreas = [];
    let preExistingAreas = [];

    for(let i=0; i<beacons.length; i++)
    {
        let b = beacons[i];
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

    for (let i=0 ; i<areas.length; i++)
    {
        let a = areas[i];
        let area = new ContentArea.ContentArea();
        area.name = a.name;
        area.coordinates = a.coordinates;

        if(a._id)
        {
            area._id = ObjectId(a._id);
            preExistingAreas.push(area);
        }
        else
        {
            newAreas.push(area);
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
            bs.ref = beacon.ref;

            if(bs.type == "iBeacon")
            {
                bs.uuid = beacon.uuid;
                bs.major = beacon.major;
                bs.minor = beacon.minor;
            }
            else {
                bs.nameSpaceId = beacon.nameSpaceId;
                bs.instanceId = beacon.instanceId;
            }


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

        for(let i=0; i< preExistingAreas.length; i++)
        {
            let a = preExistingAreas[i];
            let area = floorPlan.areas.id(a._id);
            area.name = a.name;
            area.coordinates = a.coordinates;

            area.save(err=>{
                if(err)
                    console.log(err.message);
            });
        }
        for(let i=0; i< newAreas.length; i++)
        {
            floorPlan.areas.push(newAreas[i]);
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

module.exports.deleteBeaconFromFloorPlan = function (floorPlanId, projectId, beaconId, callback) {
    Project.findOne(projectId, (err,project)=>{

        const floorPlan = project.floorPlans.id(floorPlanId);
        floorPlan.beacons.id(beaconId).remove();
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

module.exports.updateBeaconInFloorPlan = function(floorPlanId, projectId, beacon, callback){

    Project.findOne(projectId, (err,project)=>{

        const floorPlan = project.floorPlans.id(floorPlanId);

        let beaconId = ObjectId(beacon._id);

        let b = floorPlan.beacons.id(beaconId);
        b.ref = beacon.ref;
        b.txPower = beacon.txPower;
        b.lastSeen = Date.now();
        b.updated = Date.now();

        if(beacon.telemetry)
            b.telemetry = beacon.telemetry
        else
            b.telemetry = "";

        b.type = beacon.type;

        if(beacon.type.toLowerCase() === "iBeacon".toLowerCase())
        {

            b.uuid = beacon.uuid;
            b.major = beacon.major;
            b.minor = beacon.minor;
        }

        else
        {
            b.type = beacon.type;
            b.nameSpaceId = beacon.nameSpaceId;
            b.instanceId = beacon.instanceId;
            b.frameType = beacon.frameType;
        }


        project.save((err) => {
            if(err)
            {
                console.log(err.message);
                callback(err, null);
            }
            else {
                callback(null,b);
            }

        });

    });

};

/**  FRONT END  **/
module.exports.getAllProjectForUser = (userId,callback)=>{
    Project.find({'users.user_id' : userId},callback);
};