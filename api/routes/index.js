import { Router } from 'express';

import userRouter from './user';

const router = Router();

export default () => {
  router.get('/', (req, res) => {
    res.json({'message': 'Hello World'});
  });

  router.use('/users', userRouter());

  return router;
}
