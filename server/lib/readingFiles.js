'use strict

var fs = require('fs');

module.exports = {
  readFilePromise: () => {
    return new Promise((resolve, reject) => {
      fs.readFile('../../data.json', 'json', (err, res) => {
        if(err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    })
  }
}
