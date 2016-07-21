var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var usersController = require('../controllers/users');
var venuesController = require('../controllers/venues');

// root path:
router.get('/', pagesController.welcome);

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);


// venues resource paths:
router.post('/venues', venuesController.create);
router.get('/venues',     venuesController.index);
router.get('/venues/:id', venuesController.show);
module.exports = router;