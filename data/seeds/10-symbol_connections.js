
exports.seed = function(knex) {
  const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nulla eget risus vestibulum, a molestie diam facilisis. Curabitur auctor tortor in porta pretium. Suspendisse sed massa non ex venenatis ornare. Nullam faucibus cursus nisl, eget accumsan eros aliquam at. Praesent ornare tincidunt neque, vel pharetra metus maximus imperdiet. Integer justo velit, malesuada a orci quis, viverra imperdiet dui. Fusce id sapien tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et erat vel felis posuere condimentum ut sit amet turpis. Vestibulum gravida ultricies nunc quis viverra. Fusce quis tempus urna, et ornare lacus. Integer nec nunc consectetur, viverra purus in, euismod massa. Nullam at egestas nulla, quis posuere risus. Nullam consequat, mi sed porttitor ultricies, turpis turpis posuere ipsum, interdum finibus turpis justo a enim. Ut ac dictum lectus. Vestibulum nisi purus, porta in posuere at, scelerisque vitae mi. Mauris vitae arcu tortor."
  return knex('symbol_connections').insert([
    {"connected_symbol_id": 2, "main_symbol_id": 1, connection_relationship: 3, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 3, "main_symbol_id": 1, connection_relationship: 3, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 4, "main_symbol_id": 1, connection_relationship: 3, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 3, "main_symbol_id": 2, connection_relationship: 3, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 3, "main_symbol_id": 4, connection_relationship: 3, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 4, "main_symbol_id": 5, connection_relationship: 3, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 7, "main_symbol_id": 1, connection_relationship: 4, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 8, "main_symbol_id": 1, connection_relationship: 5, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 9, "main_symbol_id": 1, connection_relationship: 2, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 7, "main_symbol_id": 2, connection_relationship: 1, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 8, "main_symbol_id": 4, connection_relationship: 2, connection_strength: 8, connection_description: string},
    {"connected_symbol_id": 9, "main_symbol_id": 5, connection_relationship: 4, connection_strength: 8, connection_description: string}
  ]);
};
