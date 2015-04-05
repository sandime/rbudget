/**
 * Created by SHERRI on 4/4/15.
 */
//simple server
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
