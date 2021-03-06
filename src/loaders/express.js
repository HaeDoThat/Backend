const express = require('express');
const cors = require('cors');

const routes = require('../routes');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use('/', routes);
};