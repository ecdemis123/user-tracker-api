'use strict'
const statsLib = require('../lib/statistics');
const fileLib = require('../lib/readingFiles.js');

module.exports = {
  retrieveStatistics: (req, res) => {
    console.log("inside retrieve stats");
    console.log("this is the request query: ", req.query);

    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    let user_id = req.query.user_id;
    //get stats from db
    //call lib function for statistics
    fileLib.readJSONPromise()
    .then(data => {
      console.log("data from json promise after then", data);
      let stats = statsLib.calcUserStats(data, startDate, endDate, user_id);
      console.log('statistics from json promise: ', stats);
      res.json(stats);
    })
  }
}
