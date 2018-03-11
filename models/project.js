const mongoose = require("mongoose");
const dbconfig = require('../config/db');
const User = require('./user');
var hat = require('hat');
const FloorPlan = require("./floorplan");
const FloorPlanSchema = mongoose.model('FloorPlan').schema;

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

}

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
        callback(null,project.floorPlans.id(floorPlanId));
    }).catch(error =>{
        callback(error, null);
    });
};
