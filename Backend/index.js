const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Server is created');

  res.setHeader('Content-Type', 'text/html');
  if (req.url === '/') {
    res.write('<h1>Hello World</h1>');
  } else if (req.url === '/home') {
    res.write('<h1>Welcome Home</h1>');
  } else if (req.url === '/about') {
    res.write('<h1>Welcome to About Us</h1>');
  } else if (req.url === '/node') {
    res.write('<h1>Welcome to my Node js project</h1>');
  } else {
    res.write('<h1>Page Not Found</h1>');
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
