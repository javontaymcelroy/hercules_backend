const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          username: "admin",
          firstName: "Javontay",
          lastName: "McElroy",
          emailAddress: "johnappleseed@gmail.com",
          password: bcrypt.hashSync("admin", 10)
        }
      ]);
    });
};
