var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.warn("pre-first");
  response.send('screw you godiva');
  console.warn("post-first");
  var buf = fs.readFileSync('index.html');
  console.warn("post-read");
  response.send(buf.toString());
  console.warn("post-print");
  response.send('screw you again...');
  console.warn("post-second");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
