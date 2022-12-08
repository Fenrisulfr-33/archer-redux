const router = require('express').Router();
const national = require('./national/national.controller');
const swsh = require('./sword-shield/sword-shield.controller');
const methodNotAllowed = require('../../errors/methodNotAllowed');

router
    .route('/national')
    .get(national.list)
    .all(methodNotAllowed);

router
    .route('/national/:id')
    .get(national.read)
    .all(methodNotAllowed);

router
    .route('/national/:id/:game')
    .get(national.readGame)
    .all(methodNotAllowed);

router
    .route('/swsh')
    .get(swsh.list)
    .all(methodNotAllowed);

module.exports = router;