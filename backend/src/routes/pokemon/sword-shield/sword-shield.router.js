const router = require('express').Router();
const controller = require('./sword-shield.controller');
const methodNotAllowed = require('../../../errors/methodNotAllowed');

router
    .route('/')
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;