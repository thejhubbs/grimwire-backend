
exports.seed = function(knex) {
  return knex('pantheons_history').insert([
    {influenced_id: 3, influencer_id: 2},
    {influenced_id: 4, influencer_id: 3},
    {influenced_id: 5, influencer_id: 4}
  ]);
};
