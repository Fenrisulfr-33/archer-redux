const router = require('express').Router();
const controller = require('./national.controller');
const methodNotAllowed = require('../../../errors/methodNotAllowed');

router
    .route('/bdsp/competitive')
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;