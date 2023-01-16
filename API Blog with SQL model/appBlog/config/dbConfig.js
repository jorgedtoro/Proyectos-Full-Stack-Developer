const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "JT88dtAc89Ca%!#",
  port: 3000,
  database: "blog",
});

global.db = pool;
