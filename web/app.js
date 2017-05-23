/**
 * Module dependencies.
 */
import express from 'express';
import hbs from 'express-handlebars';
import sass from 'node-sass-middleware';
import logger from 'morgan';

import routes from './routes/index';

const app = express();

export default (config) => {
  /*
   * view engine config
   */
  app.engine('hbs', hbs({
    // set file extenstions to .hbs
    extname: 'hbs',
    helpers: {
      if_eq: function (a, b, opts) {
        if (a == b) {
          return opts.fn(this);
        }
        return opts.inverse(this);
      },
    },
    // set defaultLayout
    defaultLayout: 'main',
    // set defaultLayout directory
    layoutsDir: `${__dirname}/views/layouts/`,
    // set partial directory
    partialsDir: `${__dirname}/views/partials`,
  }));

  app.set('views', `${__dirname}/views`);
  app.set('view engine', 'hbs');


  app.locals = {
    config,
  }

  app.use('/styles', sass({
    src: `${__dirname}/styles`,
    dest: `${__dirname}/public/styles`,
    debug: true,
    outputStyle: 'expanded',
  }));

  app.use(express.static(`${__dirname}/public`));

  app.use('/', routes(app));

  return app;
};
