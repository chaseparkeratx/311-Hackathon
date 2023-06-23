const mysql = require('mysql')
const pool = require('../sql/connection')

const list = (req, res) => {
    // SELECT ALL USERS
    pool.query("SELECT * FROM ??", [",movies"], (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  module.exports = {
    list
  }