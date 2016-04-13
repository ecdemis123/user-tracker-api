'use strict'
const moment = require('moment');

module.exports = {
  calcUserStats: (data, startDate, endDate) => {

    let unixStartDate = moment(startDate, "YYYY-MM-DD").unix();
    let unixEndDate = moment(endDate, "YYYY-MM-DD").unix();
    let activity = data.activity;
    let filteredActivity = [];

    for(let i = 0; i < activity.length; i++) {
      //iterate over user activity
      let currentActivityDate = moment(activity[i].date, "YYYY-MM-DD").unix();
      //check if date is within date range, inclusive
      if(currentActivityDate <= unixEndDate && currentActivityDate >= unixStartDate) {
        //push into filtered activity array
        filteredActivity.push(activity[i]);
      }
    }
    let sessionsObj = {};
    let usersObj = {};
    for(let j = 0; j < filteredActivity.length; j++) {
      let currentSession = filteredActivity[j].session_id;
      let currentUser = filteredActivity[j].user_id;

      if(!sessionsObj[currentSession]) {
        sessionsObj[currentSession] = true;
      }
      if(!usersObj[currentUser]) {
        usersObj[currentUser] = true;
      }
    }

    let numberOfSessions = Object.keys(sessionsObj).length;
    let numberOfUsers = Object.keys(usersObj).length;
    let averageSessionsPerUser = numberOfSessions/numberOfUsers;

    return {
      num_sessions: numberOfSessions,
      unique_users: numberOfUsers,
      avg_sessions_per_user: averageSessionsPerUser
    }

  }
}
