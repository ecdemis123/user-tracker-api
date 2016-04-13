'use strict'
const jsonParser = require('body-parser').json();
const userController = require('../controllers/userController.js');

module.exports = (app, express) => {
  app.use(jsonParser);

  app.post('/activity')
  app.get('/stats')
}
