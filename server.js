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
  const dbPath = path.join(__dirname, 'api', 'db.json');
  console.log('Database path:', dbPath);
  server.use('/api', jsonServer.router(dbPath));

  // Next.js request handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) {
      console.error('Server error:', err);
      throw err;
    }
    console.log('> Ready on http://localhost:3000');
  });
}).catch(err => {
  console.error('Failed to prepare Next.js app:', err);
});
