const router = require('express').Router();
const controller = require('./builds.controller');
const methodNotAllowed = require('../../../errors/methodNotAllowed');

router
    .route('/builds')
    .put(controller.create)
    .post(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;