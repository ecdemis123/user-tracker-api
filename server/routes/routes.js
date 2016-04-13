'use strict'
const jsonParser = require('body-parser').json();
const userController = require('../controllers/userController.js');
const statController = require('../controllers/statController.js');

module.exports = (app, express) => {
  app.use(jsonParser);

  app.post('/activity', jsonParser, userController.logActivity);
  app.get('/stats', jsonParser, statController.retrieveStatistics);
}
