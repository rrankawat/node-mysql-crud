const conn = require('../db');

const sql = `INSERT INTO users(firstName, lastName) VALUES('Steve', 'Jobs')`;

conn.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
