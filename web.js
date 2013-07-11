var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(256);
len = buffer.write('\u00bd + \u00bc = \u00be', 0);
//fs.readFileSync('index.html'), 0);
console.log(len + " bytes: " + buffer.toString('utf8', 0, len));;

app.get('/', function(request, response) {
 //fs.readFileSync('index.html');
 response.send(buffer.toString('utf-8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
