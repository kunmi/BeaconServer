const mongoose = require("mongoose");
const dbconfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;
const User = require('./user')

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
        ],
    beacons: [{
        type: Array,
        default:[]

    }]


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