const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const route = Router();

/* Contacts */
route.get('/contacts', CategoryController.index);
route.get('/contacts/:id', CategoryController.show);
route.delete('/contacts/:id', CategoryController.delete);
route.post('/contacts', CategoryController.store);
route.put('/contacts/:id', CategoryController.update);

/* Categories */
route.get('/categories', CategoryController.index);
route.post('/categories', CategoryController.store);

module.exports = route;
