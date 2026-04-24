const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
    <html>
      <body style="background-color:white; text-align:center;">
        <h1>Hello from Node.js deployed via Jenkins!</h1>
      </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
