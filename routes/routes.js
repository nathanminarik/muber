const DriversController = require('./../controllers/drivers.controller');

module.exports = app => {
  app.get('/api', DriversController.greeting);

  app.post('/api/drivers', DriversController.create);
};