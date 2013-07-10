var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var contents = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send('Hello World 2!');
  response.send(contents.toString('utf8'));
  console.log('1' + contents);
  console.log('2' + contents.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
