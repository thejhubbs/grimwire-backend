
exports.seed = function(knex) {
  return knex('pantheons_history').insert([
    {influenced_id: 3, influencer_id: 2},
    {influenced_id: 4, influencer_id: 3},
    {influenced_id: 5, influencer_id: 4},
    {influenced_id: 7, influencer_id: 6},
    {influenced_id: 9, influencer_id: 8},
    {influenced_id: 1, influencer_id: 10},
    {influenced_id: 2, influencer_id: 10},
    {influenced_id: 8, influencer_id: 10}

  ]);
};
