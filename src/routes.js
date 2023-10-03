const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const route = Router();

/* Contacts */
route.get('/contacts', ContactController.index);
route.get('/contacts/:id', ContactController.show);
route.delete('/contacts/:id', ContactController.delete);
route.post('/contacts', ContactController.store);
route.put('/contacts/:id', ContactController.update);

/* Categories */
route.get('/categories', CategoryController.index);
route.get('/categories/:id', CategoryController.show);
route.post('/categories', CategoryController.store);
route.put('/categories/:id', CategoryController.update);

module.exports = route;
