
exports.up = function(knex) {
    return knex.schema.createTable('student_classes', tbl => {
        tbl.increments().primary();
        tbl
          .foreign('videoID')
          .notNullable()
          .references('id')
          .inTable('videos');
        tbl
          .foreign('classID')
          .notNullable()
          .references('id')
          .inTable('classes');
        tbl.timestamp('created_at', { useTz: true });
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('student_classes');
};
