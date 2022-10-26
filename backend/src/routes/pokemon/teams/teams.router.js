const router = require('express').Router();
const controller = require('./teams.controller');
const methodNotAllowed = require('../../../errors/methodNotAllowed');

router
    .route('/teams')
    .put(controller.create)
    .post(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;