
exports.seed = function(knex) {
  return knex('symbol_to_pantheons').insert([
    {"sp_symbol_id": 1, "sp_pantheon_id": 1},
    {"sp_symbol_id": 1, "sp_pantheon_id": 2},
    {"sp_symbol_id": 2, "sp_pantheon_id": 2},
    {"sp_symbol_id": 3, "sp_pantheon_id": 3}
  ]);
};
