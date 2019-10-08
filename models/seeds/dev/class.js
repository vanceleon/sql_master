
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('class').insert([
        {
          name: 'Teach SQL',
          description: 'I will teach you...',
          personID: 2
        },  
        {
          name: 'Teach JAVA',
          description: 'I will teach you...',
          personID: 3
        },  
        {
          name: 'Teach C#',
          description: 'I will teach you...',
          personID: 3
        },  
      ]);
    });
};
