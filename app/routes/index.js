const usersApiRoutes = require('./api/users');
const express = require('express');

const router = express.Router();

module.exports = (app) => {
  /*
   * API routes
   */
  app.use('/api/users', usersApiRoutes(router));

  // Home page
  app.get('/', (req, res) => {
    res.render('index');
  });

  return router;
};
