exports.up = function(knex) {
  return knex.schema.createTable("progressTracking", function(tbl) {
    tbl.increments();
    tbl
      .integer("exercise_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("exercises");
    tbl.string("date").notNullable();
    tbl.integer("reps").notNullable();
    tbl.integer("amountLifted");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("progressTracking");
};
