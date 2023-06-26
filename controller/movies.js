const mysql = require('mysql2')
const pool = require('../sql/connection')

const list = (req, res) => {
    // SELECT ALL MovieS
    pool.query("SELECT * FROM ??", ["movies"], (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }

  //select by ID
const show = (req, res) => {
    const {id} = req.params
    pool.query(`SELECT * FROM ?? WHERE ?? = ?`, 
    ["movies", "id", id], 
    (err,row,fields) => {
        console.log(err,row)
        res.json(row)
    })
}

const create = (req, res) => {
    const {body} = req
    const {title, release_year} = body

    pool.query(`INSERT INTO ?? (??, ??) VALUES (?, ?)`,
    ["movies", "title", "release_year", title, release_year],

    (err,row,fields) => {
    console.log(row)
        res.json({
        message: `Successfully inserted movie into id: ${row.insertId}`
        })
    })
}

const updateMovie = (req, res) => {
    const {id} = req.params

    const foundMovie = movies.find((movie) => {
        return movie.id === Number(id)
    })
    if(foundMovie){
        const index = movies.indexOf(foundMovie)
        const updateMovie = {
            ...foundMovie,
            ...req.body
        }
        movies.splice(index, 1, updateMovie)
        res.json(updateMovie)
    }
        else{
            res.status(400).json({
            msg: `No movie with ID: ${id}`
        })
    }
}

const deleteMovie =  (req, res) => {
    const {id} = req.params

    const foundMovie = Movies.find((Movie) => {
        return Movie.id === Number(id)
    })
    if(foundMovie != -1){
        const index = Movies.indexOf(foundMovie)
        Movies.splice(index, 1)
        res.json({message: "Movie Deleted"})
    }
    else{
        res.status(404).json({message: "Movie not found"})
    }
}

  module.exports = {
    list,
    show,
    create,
    updateMovie,
    deleteMovie
  }