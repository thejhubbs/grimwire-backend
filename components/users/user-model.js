const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  getImages,
  getThumbnail,
  add,
  update,
  remove
};



function find() {
  return db('users')
}

function findById(id) {
  return db('users')
    .where( 'user_id', id )
    .first();
}

function findPantheonsByUserId(id) {
  return db('user_to_pantheons')
    .join('pantheons', 'user_to_pantheons.sp_pantheon_id', 'pantheons.pantheon_id')
    .where('sp_user_id', id)
}

function findConnectionsByUserId(id) {
  return db('user_connections')
    .join('users', 'user_connections.connected_user_id', 'users.user_id')
    .where('main_user_id', id)
}

function getImages(id) {
  return db('images').where("foreign_id", id).where("foreign_class", "User").where("thumbnail", false)
}

function getThumbnail(id) {
  return db('images').where("foreign_id", id).where("foreign_class", "User").where("thumbnail", true).first()
}

function add(user) {
  return db('users')
    .insert(user)
    .then(ids => {
      return "Success";
    });
}

function addPantheonsConnection(user_pantheon) {
  return db('user_to_pantheons')
    .insert(user_pantheon)
    .then(ids => {
      return "Success";
    });
}

function addConnection(connection) {
  return db('user_connections')
    .insert(connection)
    .then(ids => {
      return "Success";
    });
}

function update(changes, id) {
  return db('users')
    .where('user_id', id)
    .update(changes);
}

function remove(id) {
  return db('users')
    .where( 'user_id', id )
    .del();
}

function removePantheonsConnection(user_pantheon_id) {
  return db('user_to_pantheons')
    .where( 'user_pantheon_id', user_pantheon_id)
    .del();
}

function removeConnection(user_connection_id) {
  return db('user_connections')
    .where( 'user_connection_id', user_connection_id)
    .del();
}
