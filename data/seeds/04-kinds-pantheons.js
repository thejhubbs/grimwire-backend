
exports.seed = function(knex) {
  return knex('kinds_to_pantheons').insert([
      //Tarot Cards
      {kp_kind_id: 1, kp_pantheon_id: 4},
      {kp_kind_id: 1, kp_pantheon_id: 5},
      //Signs
      {kp_kind_id: 3, kp_pantheon_id: 4},
      {kp_kind_id: 3, kp_pantheon_id: 5},
      //Chakras
      {kp_kind_id: 4, kp_pantheon_id: 8},
      {kp_kind_id: 4, kp_pantheon_id: 9},
      {kp_kind_id: 4, kp_pantheon_id: 4},
      {kp_kind_id: 4, kp_pantheon_id: 5},
      //Deities
      {kp_kind_id: 5, kp_pantheon_id: 8},
      {kp_kind_id: 5, kp_pantheon_id: 9},
      {kp_kind_id: 5, kp_pantheon_id: 4},
      {kp_kind_id: 5, kp_pantheon_id: 5},
      {kp_kind_id: 5, kp_pantheon_id: 1},
      {kp_kind_id: 5, kp_pantheon_id: 6},
      {kp_kind_id: 5, kp_pantheon_id: 7}
  ]);
};
