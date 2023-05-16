const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.firstPersonFunction);
routes.get('/second', myController.secondPersonFunction);


module.exports = routes;