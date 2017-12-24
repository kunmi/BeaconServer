const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;


//User schema
const UserSchema = mongoose.Schema({

    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required:true
    },

    password: {

        type: String,
        required: true

    }
    ,
    roles: {
        manage_users: {
            type: Boolean,
            default: false
        },
        manage_roles : {
            type: Boolean,
            default: false,
        },
        manage_projects: {
            type:Boolean,
            default: false
        }
    },
    activated: {
        type: Boolean,
        default: true
    },
    isadmin: {
        type: Boolean,
        default: false
    }


});


const User = module.exports = mongoose.model('User', UserSchema );


module.exports.getUserByID = function (id, callback) {
    User.findById(id, callback);
};


module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {

    //console.log(newUser);

    bcrypt.genSalt (10, (err,salt) =>{

        bcrypt.hash(newUser.password, salt, (err, hash)=>{

            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.updateUser = function (id,query, callback){
    User.findOneAndUpdate({_id: id}, query, {upsert: true},callback);
};

module.exports.deleteUser = function (id, callback) {
    User.findByIdAndRemove(id, {}, callback);

}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword,hash, (error, isMatch)=>{
        if(error) throw error;
        callback(null, isMatch);
    });
};

module.exports.getAllUsers = (callback)=>{
    User.find({},callback);
};

