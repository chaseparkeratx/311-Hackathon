const express = require('express')
const router = express.Router()
const actorsController = require('../controller/actors')

router.get('/actors', actorsController.list)

router.get('/actors/:id', actorsController.show)

router.post('/actors', actorsController.create)

router.put('/actors/d:id', actorsController.updateActor)

// router.delete('/:first_name', actorsController.deleteUserByFirstName)

module.exports = router

