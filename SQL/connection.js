const mysql = require("mysql2")

require('dotenv').config()

const {DB_HOST, DB_PASSWORD, DB_USER, DB_DATABASE, DB_PORT} = process.env
console.log(DB_HOST, DB_PASSWORD, DB_USER, DB_DATABASE, DB_PORT)
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_DATABASE,
    connectionLimit: 100,
    port: DB_PORT,
    password: DB_PASSWORD,
  });


  module.exports = pool