const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findPantheonsBySymbolId,
  findConnectionsBySymbolId,
  getImages,
  getThumbnail,
  add,
  addPantheonsConnection,
  addConnection,
  update,
  remove,
  removePantheonsConnection,
  removeConnection
};



function find() {
  return db('symbols')
}

function findById(id) {
  return db('symbols')
    .where( 'symbol_id', id )
    .first();
}

function findPantheonsBySymbolId(id) {
  return db('symbol_to_pantheons')
    .join('pantheons', 'symbol_to_pantheons.sp_pantheon_id', 'pantheons.pantheon_id')
    .where('sp_symbol_id', id)
}

function findConnectionsBySymbolId(id) {
  return db('symbol_connections')
    .join('symbols', 'symbol_connections.connected_symbol_id', 'symbols.symbol_id')
    .where('main_symbol_id', id)
}

function getImages(id) {
  return db('images').where("foreign_id", id).where("foreign_class", "Symbol").where("thumbnail", false)
}

function getThumbnail(id) {
  return db('images').where("foreign_id", id).where("foreign_class", "Symbol").where("thumbnail", true).first()
}

function add(symbol) {
  return db('symbols')
    .insert(symbol)
    .then(ids => {
      return "Success";
    });
}

function addPantheonsConnection(symbol_pantheon) {
  return db('symbol_to_pantheons')
    .insert(symbol_pantheon)
    .then(ids => {
      return "Success";
    });
}

function addConnection(connection) {
  return db('symbol_connections')
    .insert(connection)
    .then(ids => {
      return "Success";
    });
}

function update(changes, id) {
  return db('symbols')
    .where('symbol_id', id)
    .update(changes);
}

function remove(id) {
  return db('symbols')
    .where( 'symbol_id', id )
    .del();
}

function removePantheonsConnection(symbol_pantheon_id) {
  return db('symbol_to_pantheons')
    .where( 'symbol_pantheon_id', symbol_pantheon_id)
    .del();
}

function removeConnection(symbol_connection_id) {
  return db('symbol_connections')
    .where( 'symbol_connection_id', symbol_connection_id)
    .del();
}
