'use strict'

const fs = require('fs');

module.exports = {

  readJSONPromise: () => {
    console.log("inside read json promise");
    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
        console.log("this is the data inside fs.readfile", data, "++++")
        if(err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      })
    })
  }

}
