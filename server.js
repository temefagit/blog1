const express = require('express');
const next = require('next');
const jsonServer = require('json-server');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

app.prepare().then(() => {
  // JSON Server middleware
  server.use('/api', jsonServer.router(path.join(__dirname, 'api', 'db.json')));
  
  // Next.js request handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});