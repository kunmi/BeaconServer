const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");

const dbConfig = require('./config/db');

//DB: CONNECTION
mongoose.Promise = Promise;


//Connect to DB
mongoose.connect(dbConfig.database, {

    useMongoClient : true,
    promiseLibrary: global.Promise

});

//On COnnection
mongoose.connection.on('connected', () => {
        console.log("Connected to DATABASE" )+dbConfig.database;
});

mongoose.connection.on('error', (err) => {
    console.error.bind(console,'Mongo Connection ERROR '+err)
});

//END DB CONNECTION


const app = express();

const users = require('./routes/users');



// PORT NUMER
const port = 3000;


// CORS INIT
app.use(cors());

// STATIC - CLIENT CODE
app.use(express.static(path.join(__dirname, 'public')));




// BODY-PARSER MIDDLEWARE
app.use(bodyparser.json());


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



//ROUTE LINK
app.use('/users',users);


//INDEX ROUT
app.get('/', (req,res) => {

    //res.send('Invalid Endpoint');
    res.sendFile(path.join(__dirname, 'public/index.html'));

});


app.get('*', (req,res) => {
    res.redirect('/');

});



//START SERVER
app.listen(port, () => {

    console.log("Server started on port " +port);
});