'use strict'
var statsLib = require('../lib/statistics');

module.exports = {
  retrieveStatistics: (req, res) => {
    //get stats from db
    //call lib function for statistics
    statsLib.calcUserStats()
    .then()
  }
}
