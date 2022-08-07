const router = require('express').Router();
const controller = require('./swsh-comp.controller');
const methodNotAllowed = require('../../../errors/methodNotAllowed');
const protect = require('../../../middleware/authMiddleware')

router
    .route('/comp')
    .get(protect, controller.list)
    .all(methodNotAllowed);

router
    .route('/comp/create')
    .post(protect, controller.create)
    .all(methodNotAllowed);

module.exports = router;