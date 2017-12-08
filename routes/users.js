const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/user')
const dbConfig = require('../config/db');


//Register

router.post('/register', (req,res, next) =>{

    let newUser = new User({

        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user)=>{

        if(err)
        {
            res.json({success: false, msg: 'Failed to register user'});
        }
        else
        {
            res.json({success: true, msg: 'User registered'})
        }

    });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {

    const  username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user)=>{
        if(err) throw err;

        if(!user)
        {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
                if(err) throw err;

                if(isMatch)
                {
                    console.log({data: user});
                    const token = jwt.sign({data: user}, dbConfig.secret, {

                        expiresIn: 604800 //1 Week

                    });

                    res.json({
                        success: true,
                        token : 'JWT '+token,
                        user: {
                            id: user._id,
                            name: user.name,
                            username: user.username,
                            email: user.email

                        }
                    });
                }

                else
                {
                    return res.json({success: false, msg: 'Wrong Password'});
                }
        });

    })
    ;

});


// USER PROFILE
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    res.json({user: req.user});

});



router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    //ToDo
    //Check if user can actually access such data

    User.getAllUsers((err, result ) => {

        if(err) throw err;

        var users = [];

        result.forEach(function (user) {
            users.push({
                _id : user._id,
                name: user.name,
                email: user.email,
                username: user.username,
            });
        });

        res.send(users);
    });


});



module.exports = router;