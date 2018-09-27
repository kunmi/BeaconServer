const mongoose = require("mongoose");
const dbconfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;

const Project = require("./project");
const FloorPlan = require("./floorplan");
const FloorPlanSchema =  mongoose.model('FloorPlan').schema;

const uniqueArrayPlugin = require('mongoose-unique-array');

//Project Schema
const ProjectTokenSchema =mongoose.Schema({

    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Project,
        unique: true
    },
    tokens: [
            {
                type: String

            }
    ],
    admin_Tokens: [
        {
            type: String
        }
    ]
});

ProjectTokenSchema.plugin(uniqueArrayPlugin);
const ProjectToken = module.exports = mongoose.model('ProjectToken', ProjectTokenSchema );


module.exports.getAllProjectTokens = (callback)=>{
    ProjectToken.find({},callback);
};

module.exports.getAllTokensForProject = (projectId,callback)=>{

    ProjectToken.find({'project_id' : projectId},(err, projects)=>{
        if(err)
        {
            callback(err, null);
        }
        else
        {

            if(projects.length>0)
            {
                if(projects[0].tokens)
                    callback(null, projects[0].tokens);
            }
            else
                callback({message: "no tokens exist for this project at the moment"}, null)
        }
    });
};

module.exports.insertTokenForProject = (projectId,apiToken,callback)=>{


    ProjectToken.find({'project_id' : projectId}, (err, projects) =>{

        if(projects.length === 0){

            let projectToken = new ProjectToken();
            projectToken.project_id = projectId;
            projectToken.tokens.push(apiToken);
            projectToken.save((err)=>{

                if(err)
                    callback(err);

                else
                    callback(null);

            })
        }
        else
        {


            let unique = true;
            for(let i=0; i< projects[0].tokens.length; i++){
                if(projects[0].tokens[i] === apiToken){
                    unique = false;
                    break;
                }
            }

            if(unique) {
                projects[0].tokens.push(apiToken);

                projects[0].save((err)=>{
                    if(err)
                        callback(err);
                    else
                        callback(null);
                })
            }
            else
            {
                callback("Token already exists");
            }

        }
    });

};


