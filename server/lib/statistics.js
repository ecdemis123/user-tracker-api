'use strict'
const moment = require('moment');

module.exports = {
  calcUserStats: (data, startDate, endDate) => {

    let unixStartDate = moment("2012-03-18", "YYYY-MM-DD").unix()

    let activity = data.activity;
    let statistics = {
      num_sessions: 0,
      unique_users: 0,
      avg_sessions_per_user: 0
    }

    let filteredActivity = [];

    for(let i = 0; i < activity.length; i++) {
      //iterate over user activity
      //check if date is within date range, inclusive
      //push into filtered activity array
    }



  }

}
