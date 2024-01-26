const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.johnRoute);
routes.get('/jane', lesson1Controller.janeRoute);
routes.get('/joe', lesson1Controller.joeRoute);
routes.use('/contacts', require('./contacts'))

module.exports = routes;