// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
// router.get('/', ctrl.unicorns.index);
router.get('/:id', ctrl.unicorns.show);

// exports
module.exports = router;
