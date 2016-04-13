'use strict'

module.exports = {
  logActivity: (req, res) => {
    let userID = req.body.user_id;
    let sessionID = req.body.session_id;

    //insert into db

    res.json({userID: userID});
  }
}
