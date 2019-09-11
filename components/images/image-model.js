const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};



function find() {
  return db('images')
}

function findById(id) {
  return db('images')
    .where( 'image_id', id )
    .first();
}

function add(image) {
  return db('images')
    .insert(image)
    .then(ids => {
      return "Success";
    });
}

function update(changes, id) {
  return db('images')
    .where('image_id', id)
    .update(changes);
}

function remove(id) {
  return db('images')
    .where( 'image_id', id )
    .del();
}
