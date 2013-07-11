var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var lee = fs.readFileSync('index.html');
//console.log(lee);

var buffer = new Buffer(256);

len = buffer.write('\u00bd', 0);

//fs.readFileSync('index.html'), 0);
//console.log(len + " bytes: " + buffer.toString('utf8', 0, len));;

app.get('/', function(request, response) {
 //fs.readFileSync('index.html');
 response.send(lee);
 //response.send(buffer.toString('utf-8', 0, len));
 //console.log("esto jala? "+lee);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
