/**
 * Created by SHERRI on 4/4/15.
 */
//simple server
var express = require('express');
var app = express();
var path = require ('path');
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(8080);
console.log('8080 is the magic port');