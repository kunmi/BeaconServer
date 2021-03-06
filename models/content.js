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

    let date = Date.now();

    let c = new Content();
    c.title = content.title;
    c.body = content.body;
    c.published = date;
    c.project_id = projectId;
    c.floorplan_id = floorplanId;
    c.by = userId;
    c.updated = date;

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


module.exports.getContentDetails = function (contentId, callback) {
    Content.findById(contentId, (err, c)=>{

        if(err)
            callback(err, null);
        else
        {

            Project.getProjectByID(c.project_id, (err, p)=>{


                let content = {
                    title: c.title,
                    body: c.body,
                    created: c.published,
                    data: {
                        beacons: [],
                        floorplan_name: "",
                        area: ""
                    }
                };


                if(err)
                    callback(err,null);
                else {
                    let f = p.floorPlans.id(c.floorplan_id);

                    if(f){

                        content.data.floorplan_name = f.name;

                        c.beacons.forEach(b =>{

                            let beacon = f.beacons.id(b);

                            if(beacon)
                            {
                                content.data.beacons.push(beacon);
                            }

                        });


                        if(c.areas[0])
                        {
                            let area = f.areas.id(c.areas[0].area_id);
                            if(area)
                                content.data.area = area;
                        }
                    }

                    callback(null, content);
                }



            });




        }

    })
};



