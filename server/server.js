'use strict'

const express = require('express');

const app = express();
require('./routes/routes.js')(app, express);

module.exports = app;
