// <<<<<<< Bryan
const express = require('express');
const router = express.Router();
const actorsController = require('../controller/actors');

//* Get all actors
router.get('/', actorsController.getActors);

//* Get actor by ID
router.get('/:id', actorsController.getActorById);

// *Create a new actor
router.post('/', actorsController.createActor);

//* Update an actor
router.put('/:id', actorsController.updateActor);

//*Delete an actor
router.delete('/:id', actorsController.deleteActor);
// =======
const express = require('express')
const router = express.Router()
const actorsController = require('../controller/actors')

router.get('/actors', actorsController.list)

router.get('/actors/:id', actorsController.show)

router.post('/actors', actorsController.create)

router.put('/actors/d:id', actorsController.updateActor)

// router.delete('/:first_name', actorsController.deleteUserByFirstName)

module.exports = router
// >>>>>>> master

module.exports = router;
