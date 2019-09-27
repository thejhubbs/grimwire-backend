
exports.seed = function(knex) {
  return knex('category_to_kinds').insert([
    {ck_category_id: 1, ck_kind_id: 1},
    {ck_category_id: 1, ck_kind_id: 2},
    {ck_category_id: 1, ck_kind_id: 3},
    {ck_category_id: 2, ck_kind_id: 1},
    {ck_category_id: 2, ck_kind_id: 2},
    {ck_category_id: 2, ck_kind_id: 3},
    {ck_category_id: 3, ck_kind_id: 1},
    {ck_category_id: 3, ck_kind_id: 2},
    {ck_category_id: 3, ck_kind_id: 3}
  ]);
};
