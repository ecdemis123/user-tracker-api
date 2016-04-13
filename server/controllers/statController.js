'use strict'
var statsLib = require('../lib/statistics');
const fileLib = require('../lib/readingFiles.js');

module.exports = {
  retrieveStatistics: (req, res) => {

    let startDate = req.params.start_date;
    let endDate = req.params.end_date;
    //get stats from db
    //call lib function for statistics
    fileLib.readJSONPromise()
    .then(data => {
      statsLib.calcUserStats(data, startDate, endDate)
    })
  }
}
