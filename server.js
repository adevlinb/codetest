const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const http = require('http').Server(app);

app.use('/api/todos', require('./routes/api/todos'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

http.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
