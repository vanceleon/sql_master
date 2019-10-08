exports.up = function(knex) {
  return knex.schema.createTable('videos', tbl => {
    tbl.increments().primary();
    tbl.text('name').notNullable();
    tbl.text('file_path').notNullable();
    tbl
      .foreign('customerID')
      .notNullable()
      .references('id')
      .inTable('customers');
    tbl.timestamp('created_at', { useTz: true });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('video');
};
