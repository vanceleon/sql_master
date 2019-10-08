
exports.up = function(knex) {
    return knex.schema.createTable('classes', tbl => {
        tbl.increments().primary();
        tbl.text('name').notNullable();
        tbl.text('description');
        tbl.foreign('customer').notNullable().references('id').inTable('customer');
        tbl.timestamp('created_at', { useTz: true });
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('classes');
};
