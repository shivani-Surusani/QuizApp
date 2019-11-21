var express = require('express');
var path = require('path');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var endpoint1=require('./routes/endpoint1');
var endpoint2=require('./routes/endpoint2');
var endpoint3=require('./routes/endpoint3');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser())

app.use('/api/v1/users', users);
app.use('/api/v1/endpoint1/', endpoint1);
app.use('/api/v1/endpoint2/', endpoint2);
app.use('/api/v1/endpoint3/', endpoint3);

app.listen(8000, () => {
    console.log('Server started!')
});
module.exports = app;