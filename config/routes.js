const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const dbConfig = require("../knexfile");
const db = knex(dbConfig.development);

module.exports = server => {
  server.post("/register", register);
};
