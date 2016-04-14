'use strict'
const statsLib = require('../lib/statistics');
const fileLib = require('../lib/crud.js');

module.exports = {
  retrieveStatistics: (req, res) => {

    if(!req.query.start_date || !req.query.end_date || !req.query.user_id) {
      res.status(400).send({"error": "missing_params"});
    }

    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    let user_id = req.query.user_id;

    fileLib.read()
    .then(data => {
      let stats = statsLib.calcUserStats(data, startDate, endDate, user_id);
      res.json(stats);
    })
    .catch(error);
    var success = (data)=> {
      return res.json(data);
    }
    var error = (error) => {
      console.error(error);
      return res.status(400).send();
    }
  }
}
