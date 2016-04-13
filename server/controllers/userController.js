'use strict'

const fileLib = require('../lib/readingFiles.js');
const moment = require('moment');

module.exports = {
  logActivity: (req, res) => {
    let newActivity = {
      userID: req.body.user_id,
      sessionID: req.body.session_id,
      datetime: moment.format("YYYY-MM-DD")
    }

    //insert into db
    fileLib.readJSONPromise()
    .then(data => {
      data.activity.push(newActivity);
    })
  }
}
