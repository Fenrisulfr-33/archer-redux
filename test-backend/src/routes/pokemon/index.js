const router = require('express').Router();
const national = require('./national/national.controller');
const swsh = require('./sword-shield/sword-shield.controller');
const moves = require('./moves/moves.controller');
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
    .route('/sword-shield')
    .get(swsh.list)
    .all(methodNotAllowed);

router
    .route('/moves')
    .get(moves.list)
    .all(methodNotAllowed);

module.exports = router;