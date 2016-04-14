'use strict'
const moment = require('moment');
module.exports = {
  calcUserStats: (data, startDate, endDate, user_id) => {
    let unixEndDate = moment(endDate, "YYYY-MM-DD").unix();
    let unixStartDate = moment(startDate, "YYYY-MM-DD").unix();

    let allUserActivity = data.activity;
    let individualUserActivity = [];
    if(user_id) {
      for(let k = 0; k < allUserActivity.length; k++) {
        if(allUserActivity[k].user_id == user_id) {
          individualUserActivity.push(allUserActivity[k]);
        }
      }
      return activityFilter(individualUserActivity, unixStartDate, unixEndDate);
    } else {
      return activityFilter(allUserActivity, unixStartDate, unixEndDate);
    }

  }
}

const activityFilter = (activity, start, end) => {
  let filteredActivity = [];
  for(let i = 0; i < activity.length; i++) {
    let currentActivityDate = moment(activity[i].date, "YYYY-MM-DD").unix();
    if(currentActivityDate <= end && currentActivityDate >= start) {
      filteredActivity.push(activity[i]);
    }
  }
  let usersObj = {};
  for(let j = 0; j < filteredActivity.length; j++) {
    let currentUser = filteredActivity[j].user_id;
    if(!usersObj[currentUser]) {
      usersObj[currentUser] = true;
    }
  }

  let numberOfSessions = filteredActivity.length;
  let numberOfUsers = Object.keys(usersObj).length;
  return {
    num_sessions: numberOfSessions,
    unique_users: numberOfUsers,
    avg_sessions_per_user: Number((numberOfSessions/numberOfUsers).toFixed(2))
  }
}
