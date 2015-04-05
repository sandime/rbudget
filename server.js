/**
 * Created by SHERRI on 4/4/15.
 */
//simple server
var port = 8000,
    express = require('express'),
    app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log('and the magic is here: http://localhost:'+port+'/index.html');


/*

 var express = require('express');
 var app = express();

 app.set('port', (process.env.PORT || 5000));
 app.use(express.static(__dirname + '/public'));

 app.get('/', function(request, response) {
 response.send('Hello World!');
 });

 app.listen(app.get('port'), function() {
 console.log("Node app is running at localhost:" + app.get('port'));
 });
*/
