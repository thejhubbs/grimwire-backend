
exports.seed = function(knex) {
  return knex('symbols').insert([
    {
        "symbol_name": "one",
        "symbol_kind_id": 1
    },
    {
        "symbol_name": "two",
        "symbol_kind_id": 1
    },
    {
        "symbol_name": "three",
        "symbol_kind_id": 1
    },
    {
        "symbol_name": "four",
        "symbol_kind_id": 2
    },
    {
        "symbol_name": "five",
        "symbol_kind_id": 3
    }
  ]);
};
