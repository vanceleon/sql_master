
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('video')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('video').insert([
        {
          name: 'What is a Database',
          path: `C:/fake_path/video1.avi`,
          customerID:'2'
        },
        {
          name: 'How to create One',
          path: `C:/fake_path/video1.avi`,
          customerID:'3'
        },
        {
          name: 'Why create a DB',
          path: `C:/fake_path/video1.avi`,
          customerID:'2'
        },
      ]);
    });
};
