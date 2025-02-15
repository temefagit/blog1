const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'api', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser); 

server.post('/api/posts', (req, res) => {
  const newPost = req.body;
  router.db.get('posts').push(newPost).write();
  res.status(201).json(newPost);
});

server.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  router.db.get('posts').find({ id: id }).assign(updatedPost).write();
  res.status(200).json(updatedPost);
});

server.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  router.db.get('posts').remove({ id: id }).write();
  res.status(200).json({ message: 'Post deleted' });
});

server.use(router);

server.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});