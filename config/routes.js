const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const dbConfig = require("../knexfile");
const db = knex(dbConfig.development);

const secret = require("../auth/secrets").jwtKey;
const Users = require("../auth/authenticate");

// ======== // SERVER ROUTES // ======== //
module.exports = server => {
  // ======== // POST // ======== //
  server.post("/register", register);
  server.post("/login", login);
  server.post("/logout", logout);
  server.post("/exercise", exercisePost);
  // ======== // GET // ======== //
  server.get("/users", users, restricted);
  server.get("/users/:id", usersId, restricted);
  server.get("/exercises", exercises);
  // ======== // PUT // ======== //
  server.put("/exercise/:id", exerciseUpdate);
  // ======== // DELETE // ======== //
  server.delete("/exercise/:id", exerciseDelete);
};
// ======== // END OF SERVER ROUTES // ======== //

// ======== // ONBOARDING FUNCTIONS // ======== //
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
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        const id = user.id;
        res.status(200).json({
          message: `Welcome to Hercules, ${user.firstName}!`,
          token,
          id
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function logout(req, res) {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res
          .status(500)
          .json({ message: "There was a problem logging out user." });
      } else {
        res.status(200).json({ message: "Bye, have a great time!" });
      }
    });
  } else {
    res.status(200).json({ message: "Bye, have a great time!" });
  }
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

// ======== // END OF ONBOARDING FUNCTIONS // ======== //

// ======== // USER FUNCTIONS // ======== //
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
      res.status(403).json({ message: "Yo! Youre not suppose to be here!" });
    }
  };
}

function usersId(req, res) {
  const usersId = req.params.id;
  db("user")
    .where({ id: usersId })
    .first()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

// ======== // END OF USER FUNCTIONS // ======== //

// ======== // EXERCISE FUNCTIONS // ======== //

function exercises(req, res) {
  db("exercises")
    .then(exercise => {
      res.status(200).json(exercise);
    })
    .catch(err => res.status(500).json(err));
}

function exercisePost(req, res) {
  const exercise = req.body;
  db.insert(exercise)
    .into("exercises")
    .then(ids => {
      res
        .status(201)
        .json([
          ids[0],
          exercises.exerciseTitle,
          exercises.date,
          exercises.description,
          exercises.targetRegionArea,
          exercises.reps,
          exercises.amountLifted,
          exercises.customImg
        ]);
    })
    .catch(err => res.status(500).json(err));
}

function exerciseUpdate(req, res) {
  const changes = req.body;
  const { id } = req.params;

  db("exercises")
    .where({ id: id })
    .update(changes)
    .then(count => {
      db("exercises")
        .where({ id })
        .first()
        .then(exercise => {
          res.status(200).json(exercise);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function exerciseDelete(req, res) {
  const { id } = req.params;

  db("exercises")
    .where({ id })
    .del()
    .then(exercise => {
      res.status(200).json(exercise);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

// ======== // END OF EXERCISE FUNCTIONS // ======== //

// ======== // MISC FUNCTIONS // ======== //
function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(401).json({ message: "Please provide creds." });
  }
}
// ======== // END OF MISC FUNCTIONS // ======== //
