exports.up = function(knex) {
  return knex.schema.createTable("exercises", function(tbl) {
    tbl.increments();
    tbl
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("user");
    tbl.string("exerciseTitle").notNullable();
    tbl.string("date").notNullable();
    tbl.text("description").notNullable();
    tbl.string("targetRegionArea").notNullable();
    tbl.integer("reps").notNullable();
    tbl.integer("amountLifted");
    tbl.text("customImg").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("exercises");
};
