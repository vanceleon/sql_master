exports.up = function(knex) {
  return knex.schema.createTable('customers', tbl => {
    tbl.increments().primary();
    tbl.string('email').notNullable();
    tbl.string('password').notNullable();
    tbl.string('name');
    tbl.text('address');
    tbl.integer('type').notNullable();
    tbl.timestamp('created_at', { useTz: true });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
