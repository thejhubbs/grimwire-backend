const express = require('express');

const PantheonRouter = require('./components/pantheons/pantheon-router.js');
const KindsRouter = require('./components/kinds/kind-router.js');
const CategoryRouter = require('./components/categories/category-router.js');

const server = express();

server.use(express.json());
server.use('/api/pantheons', PantheonRouter);
server.use('/api/kinds', KindsRouter);
server.use('/api/categories', CategoryRouter);

server.get('/', (req, res) => {
  res.send("GrimWire API Connected");
});

module.exports = server;
