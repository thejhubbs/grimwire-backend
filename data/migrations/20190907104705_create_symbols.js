exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('symbols', tbl => {
      tbl.increments('symbol_id');
      tbl.text('symbol_name',128).unique().notNullable();
      tbl.text('symbol_description',128);
      tbl.text('symbol_overview_text');
      tbl.text('symbol_meaning_text');
      tbl.text('other_spellings');
      tbl.integer('symbol_kind_id')
        .unsigned()
        .notNullable()
        .references('kind_id')
        .inTable('kinds')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('order_number');
      tbl.json('extra_info');
    })
    .createTable('symbol_connections', tbl => {
      tbl.increments('symbol_connection_id');
      tbl.integer('main_symbol_id')
        .unsigned()
        .notNullable()
        .references('symbol_id')
        .inTable('symbols')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('connected_symbol_id')
        .unsigned()
        .notNullable()
        .references('symbol_id')
        .inTable('symbols')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.text('connection_description');
      tbl.integer('connection_strength')
      tbl.integer('connection_relationship')
    })
    .createTable('symbol_to_pantheons', tbl => {
      tbl.increments('symbol_pantheon_id');
      tbl.integer('sp_symbol_id')
        .unsigned()
        .notNullable()
        .references('symbol_id')
        .inTable('symbols')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('sp_pantheon_id')
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
    .dropTableIfExists('symbol_connections')
    .dropTableIfExists('symbol_to_pantheons')
    .dropTableIfExists('symbols');
};
