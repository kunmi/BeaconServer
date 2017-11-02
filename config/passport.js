const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const  User = require('../models/user');
const dbconfig = require('../config/db');

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = dbconfig.secret;
  passport.use(new JWTStrategy(opts, (jwt_payload, done)=>{

       User.getUserByID(jwt_payload.data._id, (err, user)=>{

            if(err) {
                return done(err, false);
            }

            if(user)
            {
                return done(null, user);
            }

            else {
                return done(null, false);
            }
        });
  }))
};