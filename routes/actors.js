const express = require('express')
const usersController = require('../controller/actors')
const router = express.Router()

router.get('/', usersController.list)

router.get('/:id', usersController.show)

router.post('/', usersController.create)

// router.put('/:id', usersController.updateUserById)

// router.delete('/:first_name', usersController.deleteUserByFirstName)

module.exports = router

