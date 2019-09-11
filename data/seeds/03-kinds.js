
exports.seed = function(knex) {
  const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nulla eget risus vestibulum"
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin nulla eget risus vestibulum, a molestie diam facilisis. Curabitur auctor tortor in porta pretium. Suspendisse sed massa non ex venenatis ornare. Nullam faucibus cursus nisl, eget accumsan eros aliquam at. Praesent ornare tincidunt neque, vel pharetra metus maximus imperdiet. Integer justo velit, malesuada a orci quis, viverra imperdiet dui. Fusce id sapien tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et erat vel felis posuere condimentum ut sit amet turpis. Vestibulum gravida ultricies nunc quis viverra. Fusce quis tempus urna, et ornare lacus. Integer nec nunc consectetur, viverra purus in, euismod massa. Nullam at egestas nulla, quis posuere risus. Nullam consequat, mi sed porttitor ultricies, turpis turpis posuere ipsum, interdum finibus turpis justo a enim. Ut ac dictum lectus. Vestibulum nisi purus, porta in posuere at, scelerisque vitae mi. Mauris vitae arcu tortor. Aliquam ut risus vel magna hendrerit fringilla et vitae turpis. Curabitur ut nisi dapibus, tempus mauris in, tristique elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean id risus fermentum, commodo nibh nec, posuere diam. Proin nunc dui, auctor non sodales a, fermentum quis enim. Curabitur sit amet lectus eleifend, elementum dolor et, consectetur libero. Nunc et semper massa, sed mattis dui. Aliquam quam magna, ultricies vel dui at, posuere semper felis. Mauris suscipit turpis in aliquet iaculis. Ut posuere augue vitae elit condimentum, id tempor odio iaculis. Fusce scelerisque consequat nulla sed ultrices. Suspendisse vehicula ligula nec felis bibendum ornare. Pellentesque vel dictum libero. Donec vehicula tellus risus, et suscipit arcu venenatis a. Sed id nunc nisi. Sed ligula arcu, semper ac metus a, fringilla lacinia tortor. Proin condimentum nunc ac nulla pretium lobortis. Proin finibus diam quis condimentum imperdiet. Suspendisse ante tellus, finibus quis eleifend eget, lobortis eget nibh. Suspendisse pulvinar dapibus odio nec ornare. Phasellus mollis diam at dignissim accumsan."


  return knex('kinds').insert([
    {
    kind_name: "Tarot Cards",
    creator_pantheon_id: 10,
    kind_description: string,
    kind_overview: text,
    specific_order: 1,
    total_number: 78,
    default_extra_info: JSON.stringify({"suit": ""})
    },
    {
    kind_name: "Hebrew Letters",
    creator_pantheon_id: 2,
    kind_description: string,
    kind_overview: text,
    specific_order: 1,
    total_number: 22,
    default_extra_info: JSON.stringify({"sound": "", "value": "", "meaning": ""})
    },
    {
    kind_name: "Astrological Signs",
    creator_pantheon_id: 10,
    kind_description: string,
    kind_overview: text,
    specific_order: 1,
    total_number: 78,
    default_extra_info: JSON.stringify({"mutability": "", "element": "", "symbol": "", "dates": ""})
    },
    {
    kind_name: "Chakras",
    creator_pantheon_id: 10,
    kind_description: string,
    kind_overview: text,
    specific_order: 1,
    total_number: 7,
    default_extra_info: JSON.stringify({"location": ""})
    },
    {
    kind_name: "Dieties",
    creator_pantheon_id: 10,
    kind_description: string,
    kind_overview: text,
    specific_order: 0,
    total_number: 0,
    default_extra_info: "{}"
    }



  ]);
};
