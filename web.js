var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('screw you');
  var buf = fs.readFileSync('index.html');
  response.send(buf.toString());
  response.send('screw you again...');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
