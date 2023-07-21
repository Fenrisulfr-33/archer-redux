const router = require('express').Router();
const national = require('./national/national.controller');
const dexes = require('./gameDexes/game-dexes.controller');
const moves = require('./moves/moves.controller');
const abilities = require('./abilities/abilities.controller');
const search = require('./search/search.controller');
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
    .route('/:game/pokedex')
    .get(dexes.list)
    .all(methodNotAllowed);

router
    .route('/moves')
    .get(moves.list)
    .all(methodNotAllowed);

router
    .route('/moves/:id')
    .get(moves.read)
    .all(methodNotAllowed);

router
    .route('/abilities')
    .get(abilities.list)
    .all(methodNotAllowed);

router
    .route('/abilities/:id')
    .get(abilities.read)
    .all(methodNotAllowed);

router
    .route('/search')
    .get(search.read)
    .all(methodNotAllowed);

router
    .route('/national/:id/test/:game')
    .get(national.test)
    .all(methodNotAllowed);

module.exports = router;