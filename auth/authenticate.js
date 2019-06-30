const jwt = require("jsonwebtoken");
const db = require("../database/dbConfig.js");
const jwtKey = require("../auth/secrets.js").jwtKey;

// quickly see what this file exports
module.exports = {
  authenticate,
  add,
  find,
  findBy,
  findById,
  findByQuery
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

function find() {
  return db("user").select("id", "username", "password");
}

function findBy(filter) {
  return db("user").where(filter);
}

async function add(user) {
  const [id] = await db("user").insert(user);

  return findById(id);
}

function findById(id) {
  return db("user").where({ id });
}

function findByQuery(page = 0) {
  return db("exercises")
    .limit(1)
    .offset(page);
}
