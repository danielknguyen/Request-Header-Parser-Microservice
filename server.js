// express is a node.js framework to write server-side javascript
// require is a built in node.js module to implement different modules into application
var express = require('express'),
    // execute and start express webserver assign to variable 'app'
    app = express(),
    // require dotenv file for sensitive variables
    dotenv = require('dotenv').config(),
    // require bodyParser to easily interpret endpoint datastream. Data read as JSON.
    bodyParser = require('body-parser'),
    // templating engine to display static webpages
    engines = require('consolidate'),
    // use assert module to handle errors
    assert = require('assert');

    // convert data to be easily transferred through the web
    app.use(bodyParser.urlencoded({ extended: true}));
    // parse/analyze incoming data as json object
    app.use(bodyParser.json());
    // serve assets, css, javascript in a directory named public
    app.use(express.static('public'));
    // set directory of views template
    app.set('views', __dirname + '/public/views');
    // use template engine to render html files
    app.engine('html', engines.nunjucks);

// require routes module
var routes = require('./public/scripts/routes.js');
// execute routes function
routes(app);

// set port of app to default heroku port number OR local port num
var port = process.env.PORT || 5000;
// listen for connection at PORT
var server = app.listen(port, function(){
  console.log("Express server listening on port %s.", port);
});
