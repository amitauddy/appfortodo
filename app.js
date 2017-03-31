/*
* A simple Express application. An express application
* contains 4 component
*   1. Configure the express app.
*   2. Use the middlewares.
*   3. Define the routes.
*/

var express = require('express');
var path = require('path')
var bodyParser = require('body-parser')
var app = express();

/* Configuration for express app */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Use of middlewares */
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next();
});

app.use(require('./todos'));

var port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log(`Ready to listen on port ${port}`)
});
