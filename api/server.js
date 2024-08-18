const express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    Task = require('../api/models/todoListModel');

    bodyParser = require('body-parser');
mongoose.set('strictQuery', false); // Prepare for the change


    
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('../api/routes/todoListRoutes'); 
routes(app); 

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


