const conn = require('../db');

const sql = `DELETE FROM users WHERE id='3'`;

conn.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
