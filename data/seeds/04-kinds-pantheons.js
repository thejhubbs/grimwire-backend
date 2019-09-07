
exports.seed = function(knex) {
  return knex('kinds_to_pantheons').insert([
      {kp_kind_id: 1, kp_pantheon_id: 1},
      {kp_kind_id: 1, kp_pantheon_id: 4},
      {kp_kind_id: 2, kp_pantheon_id: 1},
      {kp_kind_id: 3, kp_pantheon_id: 2},
      {kp_kind_id: 4, kp_pantheon_id: 3}
  ]);
};
