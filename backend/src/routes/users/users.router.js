const router = require('express').Router();
const controller = require('./users.controller');
const methodNotAllowed = require('../../errors/methodNotAllowed');
const protect = require('../../middleware/authMiddleware');

router
    .route('/register')
    .post(controller.create)
    .all(methodNotAllowed);

router
    .route('/login')
    .post(controller.login)
    .all(methodNotAllowed);

router
    .route('/me')
    .post(protect, controller.me)
    .all(methodNotAllowed);

module.exports = router;
