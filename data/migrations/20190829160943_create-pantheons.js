exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema
    .createTable('pantheons', tbl => {
      tbl.increments('pantheon_id');
      tbl.text('pantheon_name', 128).unique().notNullable();
      tbl.text('pantheon_description');
      tbl.text('pantheon_overview');
      tbl.text('pantheon_history');
      tbl.text('pantheon_culture');
      tbl.integer('start_year');
      tbl.integer('end_year');
    })
    .createTable('pantheons_history', tbl => {
      tbl.increments('pantheon_history_id');
      tbl.integer('influencer_id')
        .unsigned()
        .notNullable()
        .references('pantheon_id')
        .inTable('pantheons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('influenced_id')
        .unsigned()
        .notNullable()
        .references('pantheon_id')
        .inTable('pantheons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });

};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('pantheons_history')
    .dropTableIfExists('pantheons');
};
