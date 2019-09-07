const express = require('express');

const PantheonRouter = require('./components/pantheons/pantheon-router.js');
const KindRouter = require('./components/kinds/kind-router.js');
const CategoryRouter = require('./components/categories/category-router.js');
const SymbolRouter = require('./components/symbols/symbol-router.js');
const UserRouter = require('./components/users/user-router.js');

const server = express();
const session = require('express-session');

server.use(
  session({
    name: 'notsession', // default is connect.sid
    secret: 'nobody tosses a dwarf!',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in milliseconds
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false,
  })
);

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
