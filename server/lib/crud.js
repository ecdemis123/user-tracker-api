'use strict'

const fs = require('fs');

module.exports = {

  read: () => {
    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + '/../../data.json', 'utf8', (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      })
    })
  },

  create: data => {
    return new Promise((resolve, reject) => {
      fs.writeFile(__dirname + '/../../data.json', JSON.stringify(data), 'utf8', err => {
        if(err) {
          reject(err);
        } else {
          resolve();
        }
      })
    })
  }

}
