// Create Web server
// Create a server that listens on port 3000 and responds with the content of the file comments.html
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
}).listen(3000);