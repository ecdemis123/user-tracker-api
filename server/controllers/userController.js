'use strict'

const fileLib = require('../lib/crud.js');
const moment = require('moment');

module.exports = {
  logActivity: (req, res) => {

    if(!req.body.user_id || !req.body.session_id) {
      res.status(400).send({"error": "missing_params"});
    }

    let newActivity = {
      user_id: req.body.user_id,
      session_id: req.body.session_id,
      date: moment().format("YYYY-MM-DD")
    }

    fileLib.read()
    .then(data => {
      // let activity = data.activity;
      data.activity.push(newActivity);
      fileLib.create(data)
      .then(success)
      .catch(error);
    })

    var error = (error) => {
      console.error(error);
      return res.status(400).send();
    }
    var success = () => {
      console.log("success!");
      return res.status(200).send();
    }
  }
}
