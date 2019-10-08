exports.up = function(knex) {
  return knex.schema.createTable('student_classes', tbl => {
    tbl.increments().primary();
    tbl
      .foreign('customer')
      .notNullable()
      .references('id')
      .inTable('customers');
    tbl
      .foreign('class')
      .notNullable()
      .references('id')
      .inTable('classes');
    tbl.timestamp('created_at', { useTz: true });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('student_classes');
};
