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
    //useMongoClient : true,
    promiseLibrary: global.Promise,
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }

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



// PORT NUMER
//const port = 3000;
//Heroku

const port = process.env.PORT || 8080;



// CORS INIT
app.use(cors());

// STATIC - CLIENT CODE
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));





// BODY-PARSER MIDDLEWARE
app.use(bodyparser.json());


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



//ROUTE LINK

const users = require('./routes/users');
const projects = require('./routes/projects');
const floorPlan = require('./routes/floorplan');
const content = require('./routes/content');
const api = require('./routes/api');

app.use('/users',users);
app.use('/projects', projects);
app.use('/floorplan', floorPlan);
app.use('/content', content);

app.use('/api', api);

//INDEX ROUT
app.get('/', (req,res) => {

    //res.send('Invalid Endpoint');
    res.sendFile(path.join(__dirname, 'public/index.html'));

});


app.get('*', (req,res) => {
    res.redirect('/');

});



//START SERVER
//HEROKU
/*
app.listen(port, () => {
    console.log("Server started on port " +port);
});
*/

//EVENNODE
app.listen(port,'0.0.0.0' ,() => {
    console.log("Server started on port " +port);
});