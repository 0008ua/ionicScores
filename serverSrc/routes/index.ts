import express, { Request, Response } from 'express';
import path from 'path';

import dataRouter from './data.routes';
import authRouter from './auth.routes';
import storeRouter from './store.routes';

const router = express.Router();
router.use('/', express.static(path.join(__dirname, '..', '..', 'public'), { redirect: false }));
router.use('*', (req: Request, res: Response) => res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html')));


export {
  router,
  dataRouter,
  authRouter,
  storeRouter,
};
