const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/user')
const dbConfig = require('../config/db');
var ObjectId = require('mongodb').ObjectID;


//Register

router.post('/register', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {

        let newUser = new User({

            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            roles: {
                manage_users: req.body.roles.manage_users,
                manage_roles: req.body.roles.manage_roles,
                manage_projects: req.body.roles.manage_projects
            },
            isadmin: req.body.isadmin

        });

        User.addUser(newUser, (err, user) => {

            if (err) {
                console.error(err, 'Uncaught Exception thrown');
                res.json({success: false, msg: 'Failed to register user'});
            }
            else {
                res.json({success: true, msg: 'User registered'})
            }

        });
    }
    else
    {
        res.json({success:false, msg: 'NotAuthorized'});
    }
});





// Authenticate
router.post('/authenticate', (req, res, next) => {

    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user)=>{
        if(err)
        {
            //throw err;
            console.error(err, 'Uncaught Exception thrown');
            return res.json({success: false, msg: 'Wrong Password '+ err.message});
        }

        if(!user)
        {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
                if(err)
                {
                    //throw err;
                    console.log(err);
                    res.send("Error occurred comparing password: "+err);
                    return;
                }

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
    let presentUser = req.user;

    if(presentUser) {
        res.json({user: presentUser});
    }

    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});



router.get('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser) {
        //Todo isadmin
        User.getAllUsers((err, result) => {

            if (err) {
                console.error(err, 'Uncaught Exception thrown');
                res.send([]);
                return
            }
            ;

            var users = [];

            result.forEach(function (user) {
                users.push({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                });
            });

            res.send(users);
        });
    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});

router.get('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let presentUser = req.user;
    if(presentUser) {
        User.getUserByID(ObjectId(req.params.id), (err, user)=>{

            if(err)
            {
                console.error(err);
                res.send({success: false, msg: err.message});
            }
            else
            {
                user.password = ":D12345character007!!!@";
                res.send({success: true, user: user});
            }

        });



    }
    else
    {
        res.send({success: false, msg: 'Not Authorized'});
    }

});

router.patch('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
    //Check if user can actually access such data
        if(presentUser.roles.manage_users)
        {
            query =    {
                "name" : req.body.name,
                "username" : req.body.username,
                "email" : req.body.email
            }

            if(presentUser.roles.manage_roles)
            {
                query.roles = {};
                query.roles.manage_users = req.body.roles.manage_users;
                query.roles.manage_roles = req.body.roles.manage_roles;
                query.roles.manage_projects = req.body.roles.manage_projects;
            }

            if(presentUser.isadmin)
            {
                query["isadmin"] = req.body.isadmin;
            }

            User.updateUser(ObjectId(req.params.id),query, (err, user)=>{
                if(err)
                {
                    console.error(err);
                    res.send({success: false, msg: err.message});
                }
                else
                {
                    res.send({success: true, user: user});
                }

            });

        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }
    }

    else{
        res.send(401);
    }

});


router.delete('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {

    let presentUser = req.user;

    if(presentUser)
    {
        //Check if user can actually access such data
        if(presentUser.roles.manage_users && presentUser.roles.manage_roles && presentUser.roles.manage_projects && presentUser.isadmin)
        {
            User.deleteUser(ObjectId(req.params.id), (err)=>{
                if(err)
                {
                    console.error(err);
                    res.send({success: false, msg: err.message});
                }
                else
                {
                    res.send({success: true});
                }
            });
        }
        else
        {
            res.send({success: false, msg: "Not Permitted"});
        }
    }

    else{
        res.send(401);
    }

});



module.exports = router;