const config = require('./config/config.js');
const locales = require('./config/locales.js');
const errors = require('./config/errors.js');

const routes = require('./routes.js');
const controllers = require('./controllers.js');
const services = require('./services.js');
const models = require('./models.js');
// meta
const meta = require('./meta.js');
// monkey
const monkey = require('./monkey.js');

export default {
  routes,
  controllers,
  services,
  models,
  config,
  locales,
  errors,
  meta,
  monkey,
};
