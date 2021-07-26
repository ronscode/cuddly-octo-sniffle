const http = require('http');
const port = 3042;

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hello JS World!');
  res.end();
}).listen(port)