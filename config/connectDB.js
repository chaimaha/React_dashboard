//import postgres to connect to the data base created in PgAdmin 4
const Pool = require("pg").Pool;
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "2000",
  database: "postgres",
});
module.exports = pool;
