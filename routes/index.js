const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.firstPersonFunction);
routes.get('/second', myController.secondPersonFunction);
// router.use('/contacts', require('./contacts');

module.exports = routes;