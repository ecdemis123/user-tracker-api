'use strict'

const fileLib = require('../lib/readingFiles.js');
const moment = require('moment');

module.exports = {
  logActivity: (req, res) => {
    let newActivity = {
      user_id: req.body.user_id,
      session_id: req.body.session_id,
      date: moment().format("YYYY-MM-DD")
    }

    //insert into db
    fileLib.readJSONPromise()
    .then(data => {
      data.activity.push(newActivity);
    })
  }
}
