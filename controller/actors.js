const mysql = require('mysql2')
const pool = require('../sql/connection')

const list = (req, res) => {
    // SELECT ALL ACTORS
    pool.query("SELECT * FROM ??", ["actors"], (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

const show = (req, res) => {
  const {id} = req.params
  pool.query(`SELECT * FROM ?? WHERE ?? = ?`, 
  ["actors", "id", id],
  (err, row, fields) => {
    console.log(err,row)
    res.json(row)
  }) 
}

const create = (req, res) => {
  const {body} = req
  const {first_name, last_name, movie_id} = body

  pool.query(`INSERT INTO ?? (??, ??) VALUES (?, ?)`,
  ["actors", "first_name", "last_name", first_name, last_name],

  (err,row,fields) => {
  console.log(row)
      res.json({
      message: `Successfully inserted actor into id: ${row.insertId}`
      })
  })
}

const updateActor = (req, res) => {
  const foundActor = actors.find((actor) => {
    return actor.id === Number(id)
  })
  if(foundActor){
    const index = actors.indexOf(foundActors)
    const updateActor = {
      ...foundActor,
      ...req.body
    }
    movies.splice(index, 1, updateActor)
    res.json(updateActor)
  } else {
      res.status(400).json({
        msg: `No actor with ID: ${id}`
      })
  }
}

  module.exports = {
    list,
    show,
    create,
    updateActor
  }