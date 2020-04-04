const express = require('express');
const app = express();
const port = process.env.PORT || 4005;
let runningMessage = 'Server is running on port ' + port;

app.get('/', (req, res) => {
  var fs = require("fs");
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  console.log('API was successfully requested');
  
});

app.get('/about', (req, res) => {
  var fs = require("fs");
  fs.readFile('about.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  console.log('API was successfully requested');
  
});

const server = app.listen(port, () => {
  console.log(runningMessage);
});

module.exports = server;
