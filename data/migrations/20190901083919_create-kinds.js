exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('kinds', tbl => {
      tbl.increments('kind_id');
      tbl.text('kind_name',128).unique().notNullable();
      tbl.text('kind_description',128);
      tbl.text('kind_application_theory_text');
      tbl.text('kind_background_history_text');
      tbl.integer('creator_pantheon_id')
        .unsigned()
        .notNullable()
        .references('pantheon_id')
        .inTable('pantheons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('total_number');
      tbl.boolean('specific_order');
      tbl.json('default_extra_info');
    })
    .createTable('kinds_to_pantheons', tbl => {
      tbl.increments('kinds_to_pantheons_id');
      tbl.integer('kp_kind_id')
        .unsigned()
        .notNullable()
        .references('kind_id')
        .inTable('kinds')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('kp_pantheon_id')
        .unsigned()
        .notNullable()
        .references('pantheon_id')
        .inTable('pantheons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('kinds')
    .dropTableIfExists('kinds_to_pantheons');
};
