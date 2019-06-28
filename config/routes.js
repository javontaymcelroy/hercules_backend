const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const dbConfig = require("../knexfile.js");
const db = knex(dbConfig.development);

const secret = require("../auth/secrets.js");
const Users = require("../auth/authenticate.js");

module.exports = server => {
  server.post("/register", register);
  server.post("/login", login);
  server.get("/users", users);
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

function login(req, res) {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrpyt.compareSync(password, user.password)) {
        const token = generateToken(user);
        const id = user.id;
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token,
          id
        });
      } else {
        res.status(401).json({ message: "username or password is incorrect" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "5d"
  };

  return jwt.sign(payload, secret, options);
}

function users(req, res) {
  Users.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
}

function only(username) {
  return function(req, res, next) {
    if (req.headers.username === username) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "Bruh, leave, you are not suppose to be here!" });
    }
  };
}
