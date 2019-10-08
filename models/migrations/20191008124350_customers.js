
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('email');
        tbl.string('password')
        tbl.string('name')
        tbl.text('address')
        tbl.integer('type')
        tbl.timestamp('created_at', { useTz: true });
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
