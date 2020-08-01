const conn = require('../db');

const sql = `UPDATE users SET firstName='Rao' WHERE id='1'`;

conn.query(sql, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
