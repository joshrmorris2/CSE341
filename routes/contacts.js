const routes = require('express').Router();
const contactController = require('../controllers/contacts');

routes.post('/', contactController.create);

routes.get('/', contactController.getAll);
routes.get('/:id', contactController.getSingle);

routes.put('/:id', contactController.update);
routes.delete('/:id', contactController.remove);

module.exports = routes;