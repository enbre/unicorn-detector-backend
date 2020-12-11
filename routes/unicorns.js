// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.unicorns.index);
router.get('/:id', ctrl.unicorns.show);
// router.post('/', ctrl.unicorns.create);
// router.put('/:id', ctrl.unicorns.update);
// router.delete('/:id', ctrl.unicorns.destroy);

// exports
module.exports = router;
