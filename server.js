const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'api', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});