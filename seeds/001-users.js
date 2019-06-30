exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          username: "admin",
          firstName: "Jeff",
          lastName: "Ramirez",
          emailAddress: "johnappleseed@gmail.com",
          password: "admin"
        }
      ]);
    });
};