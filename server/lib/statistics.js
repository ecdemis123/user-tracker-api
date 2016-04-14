'use strict'
const moment = require('moment');

const activityFilter = (activity, start, end) => {
  console.log("inside activity filter")
  let filteredActivity = [];
  console.log("activity length inside filter", activity.length);
  for(var i = 0; i < activity.length; i++) {
    let currentActivityDate = moment(activity[i].date, "YYYY-MM-DD").unix();
    if(currentActivityDate <= end && currentActivityDate >= start) {
      //push into filtered activity array
      console.log("inside if statement")
      filteredActivity.push(activity[i]);
      console.log("filteredActivity", filteredActivity);
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
  return {
    num_sessions: numberOfSessions,
    unique_users: numberOfUsers,
    avg_sessions_per_user: (numberOfSessions/numberOfUsers).toFixed(2)
  }
}

module.exports = {
  calcUserStats: (data, startDate, endDate, user_id) => {
    console.log("inside calc user stats");
    console.log("end date, ", endDate);
    let unixEndDate = moment(endDate, "YYYY-MM-DD").unix();
    console.log("unix end date", unixEndDate);

    let unixStartDate = moment(startDate, "YYYY-MM-DD").unix();
    console.log("unix start date", unixStartDate);

    let allUserActivity = data.activity;
    console.log("data.activity", data.activity);
    let individualUserActivity = [];
    if(user_id) {
      for(var k = 0; k < allUserActivity.length; k++) {
        if(allUserActivity[k].user_id == user_id) {
          individualUserActivity.push(allUserActivity[k]);
        }
      }
      console.log('individual User activity', individualUserActivity);
      return activityFilter(individualUserActivity, unixStartDate, unixEndDate);
    } else {
      console.log("inside else case")
      return activityFilter(allUserActivity, unixStartDate, unixEndDate);
    }

  }
}
