
exports.seed = function(knex) {
  return knex('kinds').insert([
    {kind_name: "Tarot Cards", creator_pantheon_id: 1},
    {kind_name: "Astrological Signs", creator_pantheon_id: 1},
    {kind_name: "Chakras", creator_pantheon_id: 2},
    {kind_name: "Runes", creator_pantheon_id: 3}
  ]);
};
