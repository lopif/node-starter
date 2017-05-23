/**
 * Module dependencies.
 */
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import Logger from './middlewares/Logger';
import config from './config';

/**
 * Sub Apps
 */
import web from '../web/app';
import api from '../api/app';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: `${__dirname}/../.env` });

const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

/**
 * Create Express server.
 */
const app = express();
const logger = Logger();

const appConfig = config(env);

/**
 * Express configuration.
 */
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api(appConfig));
app.use('/', web(appConfig));

app.listen(port, () => logger.appStarted(env, port, 'localhost'));
