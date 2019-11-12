var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var endpoint1=require('./routes/endpoint1');
var endpoint2=require('./routes/endpoint2');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);
app.use('/api/v1/endpoint1/', endpoint1);
app.use('/api/v1/endpoint2/', endpoint2);

app.listen(8000, () => {
    console.log('Server started!')
});
module.exports = app;