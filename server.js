const express = require('express');

const PantheonRouter = require('./components/pantheons/pantheon-router.js');
const KindRouter = require('./components/kinds/kind-router.js');
const CategoryRouter = require('./components/categories/category-router.js');
const SymbolRouter = require('./components/symbols/symbol-router.js');
const UserRouter = require('./components/users/user-router.js');

const server = express();

server.use(express.json());
server.use('/api/pantheons', PantheonRouter);
server.use('/api/kinds', KindRouter);
server.use('/api/categories', CategoryRouter);
server.use('/api/symbols', SymbolRouter);
server.use('/api/users', UserRouter);

server.get('/', (req, res) => {
  res.send("GrimWire API Connected");
});

module.exports = server;
