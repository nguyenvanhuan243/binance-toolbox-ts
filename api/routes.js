'use strict';
module.exports = function (app) {

  const spotController = require('./controllers/SpotController');

  app.route('/')
    .get(spotController.getHealthServer)
};
