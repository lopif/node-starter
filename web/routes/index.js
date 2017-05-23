import { Router } from 'express';

import SiteController from '../controllers/SiteController';

const router = new Router();

export default (config) => {
  const siteController = new SiteController(config);
  /*
   * Site Routing
   */

  // Main page
  router.get('/', siteController.index);

  return router;
};
