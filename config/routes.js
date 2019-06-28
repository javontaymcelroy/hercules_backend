const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const dbConfig = require("../knexfile.js");
const db = knex(dbConfig.development);

const secret = require("../auth/secrets.js");
const Users = require("../auth/authenticate.js");

module.exports = server => {
  server.post("/register", register);
};

function register(req, res) {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}
