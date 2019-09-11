
exports.seed = function(knex) {
  return knex('symbol_connections').insert([
    {"connected_symbol_id": 2, "main_symbol_id": 1},
    {"connected_symbol_id": 3, "main_symbol_id": 1},
    {"connected_symbol_id": 4, "main_symbol_id": 1},
    {"connected_symbol_id": 3, "main_symbol_id": 2},
    {"connected_symbol_id": 3, "main_symbol_id": 4},
    {"connected_symbol_id": 4, "main_symbol_id": 5}
  ]);
};
