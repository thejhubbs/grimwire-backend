
exports.seed = function(knex) {
  return knex('categories').insert([
    {category_name: "Introduction to Magick", category_number: 101},
    {category_name: "Natural Magick", category_number: 102},
    {category_name: "Magick & Morality", category_number: 103},
    {category_name: "Kabbalah", category_number: 201}
  ]);
};
