const conn = require('../db');

const sql = `SELECT * FROM users`;

conn.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
