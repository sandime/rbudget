/**
 * Created by SHERRI on 4/4/15.
 */
//simple server
    /*
 var express = require('express');
var app = express();
var path = require ('path');
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(1337);
console.log("magic");
*/


var express = require('express');
var app = express();
var path = require ('path');
app.set('port', (process.env.PORT || 8000));
 app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname + '/index.html'));
 });
app.listen(app.get('port'), function() {
    console.log("magic is on port:" + app.get('port'));
});


