require("dotenv").config();
const knex = require("knex");

const setupPaginator = require("knex-paginator");

const knexConfig = require("../knexfile");
const environment = process.env.DB_ENV || "development";
const db = knex(knexConfig[environment]);
setupPaginator(db);
module.exports = db;
