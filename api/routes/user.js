/**
 * User API routes
 */
import { Router } from 'express';

import UserController from '../controllers/UserController';

const router = new Router();

export default () => {
  const controller = new UserController({});

  router.get('/', controller.index);

  return router;
}
