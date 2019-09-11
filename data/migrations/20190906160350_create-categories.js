exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema
    .createTable('categories', tbl => {
      tbl.increments('category_id');
      tbl.text('category_name',128).unique().notNullable();
      tbl.text('category_description',128);
      tbl.text('category_overview');
      tbl.integer('category_number');
    })
    .createTable('category_prerequisites', tbl => {
      tbl.increments('category_prereq_id');
      tbl.text("category_prereq_description");
      tbl.integer('cp_category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('cp_prereq_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('category_to_kinds', tbl => {
      tbl.increments('category_kind_id');
      tbl.integer('ck_category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ck_kind_id')
        .unsigned()
        .notNullable()
        .references('kind_id')
        .inTable('kinds')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });

};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('category_to_kinds')
    .dropTableIfExists('category_prerequisites')
    .dropTableIfExists('categories');
};
