var jsonParser = require('body-parser').json();

var userController = require('../controllers/userController.js');

module.exports = function(app, express) {
  app.use(jsonParser);
}
