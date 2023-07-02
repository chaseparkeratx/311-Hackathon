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

module.exports = router;
