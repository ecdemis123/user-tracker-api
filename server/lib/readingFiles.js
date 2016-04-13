'use strict'

const fs = require('fs');

module.exports = {
  readFilePromise: () => {
    return new Promise((resolve, reject) => {
      fs.readFile('../../data.json', 'utf8', (err, res) => {
        if(err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    })
  },

  readJSONPromise: () => {
    return new Promise((resolve, reject) => {
      readFilePromise()
      .then(res => {
        try {
          resolve(JSON.parse(res));
        } catch(ex) {
          reject(ex);
        }
      })
    })
  }
}
