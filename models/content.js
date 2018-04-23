const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;


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
        type: ObjectId,
        required: false
    },
    project_id: {
        type: ObjectId
    },
    published: {
        type: Date
    },
    by: {
        type: ObjectId
    }
    ,
    beacons: [{ beacon_id: ObjectId }],
    areas: [{ area_id: ObjectId}]
});


const Content = module.exports = mongoose.model('Content', ContentSchema );


module.exports.getContentByID = function (id, callback) {
    Content.findById(id, callback);
};


module.exports.getContentsByProject = function (projectId, callback) {
    const query = {project_id: projectId};
    Content.findOne(query, callback);
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
    c.beacons.push(content.beacon);
    c.area.push(content.area);

    c.save().then((err,content)=>{
        callback(null,content);
    }).catch(callback(err, null));

};



