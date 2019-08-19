var express = require('express');
var path = require('path');
var homeRouter = require('./routes/home');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'resources')));
app.use('/', homeRouter);
module.exports = app;