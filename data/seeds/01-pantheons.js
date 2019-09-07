
exports.seed = function(knex) {
  return knex('pantheons').insert([
    {pantheon_name: "Egyptian"},
    {pantheon_name: "Hebrew"},
    {pantheon_name: "Christianity"},
    {pantheon_name: "Occult"},
    {pantheon_name: "Wicca"}
  ]);
};
