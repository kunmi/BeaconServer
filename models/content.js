const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;
const Project = require('./project');




//User schema
const ContentSchema = mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String,
        required: true,
    },
    floorplan_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    published: {
        type: Date
    },
    by: {
        type: mongoose.Schema.Types.ObjectId,
    },
    beacons: [mongoose.Schema.Types.ObjectId],
    areas: [{ area_id:  mongoose.Schema.Types.ObjectId}],
    updated: {
        type: Date,
        default: Date.now()
    }

});


const Content = module.exports = mongoose.model('Content', ContentSchema );


module.exports.getAllContents = (callback)=>{
    Content.find({},callback);
};

module.exports.getContentByID = function (id, callback) {
    Content.findById(id, callback);
};


module.exports.getContentsByProject = function (projectId, callback) {
    const query = {project_id: projectId};
    Content.find(query, callback);
};

module.exports.getContentsByFloorplan = function (floorplanId,projectId, callback) {
    const query = {
        project_id: projectId,
        floorplan_id: floorplanId
    };
    Content.findOne(query, callback);
};

// ADD CONTENT TO PROJECT
module.exports.addContentToFloorPlan =  function(floorplanId, projectId, userId,content, callback){

    let c = new Content();
    c.title = content.title;
    c.body = content.body;
    c.published = Date.now();
    c.project_id = projectId;
    c.floorplan_id = floorplanId;
    c.by = userId;

    c.save().then((newC)=>{
        if(content.beacons)
        {
            content.beacons.forEach((b)=>{
                newC.beacons.push(b);
            });
        }

        if(content.area)
            newC.areas.push(content.area._id);

        newC.save().then( (newC)=> {
                callback(null, newC);
                Project.sendPushForProject(projectId, 3);
            }).
        catch(err=>{callback(err,null)});

    }).catch(err=>{
        callback(err, null);
    })





};



