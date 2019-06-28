exports.up = function(knex) {
  return knex.schema.createTable("user", user => {
    user.increments();

    user
      .string("username", 255)
      .notNullable()
      .unique();
    user.string("firstName", 255).notNullable();
    user.string("lastName", 255).notNullable();
    user.string("emailAddress", 255).notNullable();
    user.string("password", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
