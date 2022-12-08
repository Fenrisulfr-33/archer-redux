const router = require('express').Router();
const controller = require('./national/national.controller');
const methodNotAllowed = require('../../errors/methodNotAllowed');

router
    .route('/national')
    .get(controller.list)
    .all(methodNotAllowed);

router
    .route('/national/:id')
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route('national/:id/:game')
    .get(controller.readGame)
    .all(methodNotAllowed);

module.exports = router;