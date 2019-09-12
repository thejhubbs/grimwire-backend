
exports.seed = function(knex) {
  const big_array = [];

  ["Pantheon", "Kind", "Category", "Symbol"].map(item => {
    const array = []
    for(var i = 1; i < 20; i++){
      big_array.push( {
          foreign_id: i,
          foreign_class: item,
          image_url: "1567961920055alcohol-bar-beer-1283219.jpg",
          thumbnail: 1,
          image_title: "The Thumbnail of this object",
          image_description: "this is where a description will go for the thing when it is the time to put it there."
      } )
      big_array.push( {
          foreign_id: i,
          foreign_class: item,
          image_url: "1567961920055alcohol-bar-beer-1283219.jpg",
          thumbnail: 0,
          image_title: "The Thumbnail of this object",
          image_description: "this is where a description will go for the thing when it is the time to put it there."
      } )
      big_array.push( {
          foreign_id: i,
          foreign_class: item,
          image_url: "1567961920055alcohol-bar-beer-1283219.jpg",
          thumbnail: 0,
          image_title: "The Thumbnail of this object",
          image_description: "this is where a description will go for the thing when it is the time to put it there."
      } )
    }
  })

  return knex('images').insert(big_array);

};
