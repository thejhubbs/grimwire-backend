
exports.seed = function(knex) {
  return knex('category_prerequisites').insert([
    {cp_category_id: 2, cp_prereq_id: 1},
    {cp_category_id: 3, cp_prereq_id: 1},
    {cp_category_id: 4, cp_prereq_id: 1},
    {cp_category_id: 4, cp_prereq_id: 3}

  ]);
};
