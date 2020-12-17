const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.sightings.index);
router.get('/:id', ctrl.sightings.show);
router.post('/', ctrl.sightings.create);
router.delete('/:id', ctrl.sightings.destroy);


// exports
module.exports = router;
