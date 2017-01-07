/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const logger = require('morgan');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const ENV = process.env.ENV || 'development';
const routes = require('./routes/index');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//  The :status token will be colored red for server error codes, yellow for client error codes,
//  cyan for redirection codes, and uncolored for all other codes.
app.use(logger('dev'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/styles', sass({
  src: `${__dirname}/styles`,
  dest: `${__dirname}/../public/styles`,
  debug: true,
  outputStyle: 'expanded',
}));

app.use(express.static('public'));

app.use('/', routes(app));

app.listen(PORT, () => {
  console.log(`Running ${ENV} app listening on port ${PORT}`);
});
