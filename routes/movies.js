const express = require('express')
const router = express.Router()
const moviesController = require('../controller/movies')


//get all
router.get('/movies', moviesController.list)

//get by ID
router.get('/movies/:id', moviesController.show)

//create/add movie
router.post('/movies', moviesController.create)

//update movie
router.put('/movies/:id', moviesController.updateMovie)

//delete movie
router.delete('/movies:id', moviesController.deleteMovie)

module.exports = router