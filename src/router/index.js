const express = require('express');
let router = express.Router();
const controllers = require('../modules/authen/controllers');
const bookControllers = require('../modules/booking/controllers');
const withAuth = require('../middleware/withAuth');
  
  router.post('/login', controllers.loginController.execute)

  router.get('/booking', bookControllers.getBookingController.execute);

  router.get('/status', bookControllers.getStatusController.execute);

  router.get('/event', bookControllers.getEventController.execute);

  router.post('/book', bookControllers.bookController.execute);

  router.put('/book', bookControllers.updateBookController.execute);

  router.get('/databook', bookControllers.getDataBookingController.execute);

  router.get('/test', controllers.testController.execute);

  module.exports = router;