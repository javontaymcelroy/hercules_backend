const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          id: 2,
          username: "admin",
          firstName: "Jeff",
          lastName: "Ramirez",
          emailAddress: "johnappleseed@gmail.com",
          password: bcrypt.hashSync("admin", 10)
        }
      ]);
    });
};
