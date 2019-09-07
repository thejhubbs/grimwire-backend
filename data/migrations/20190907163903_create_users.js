exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments('user_id');
      tbl.text('password', 128).notNullable();
      tbl.text('username', 32).notNullable().unique();
      tbl.text('email', 128).notNullable().unique();
      tbl.text('bio');
      tbl.text('link', 128);
      tbl.text('link_description');
      tbl.integer('role');
      tbl.boolean('verified');
    })

};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('users')
};
