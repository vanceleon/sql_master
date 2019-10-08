
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          email: 'test@gmail.com',
          password:'pass1234',
          name: 'Vance',
          address: '123 Wall St',
          type: 1
        },
        {
          email: 'user@gmail.com',
          password:'pass1234',
          name: 'Leon',
          address: '123 Wall St',
          type: 2
        },
        {
          email: 'tu@gmail.com',
          password:'pass1234',
          name: 'TU',
          address: '123 Wall St',
          type: 1
        },
      ]);
    });
};
