const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dbconfig = require('../config/db');



//USer schema
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


});


const User = module.exports = mongoose.model('User', UserSchema );


module.exports.getUserByID = function (id, callback) {
    User.findById(id, callback);
}


module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {

    console.log(newUser);


    bcrypt.genSalt(10, (err,salt) =>{

        bcrypt.hash(newUser.password, salt, (err, hash)=>{

            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword,hash, (error, isMatch)=>{
        if(error) throw error;
        callback(null, isMatch);
    });
}
