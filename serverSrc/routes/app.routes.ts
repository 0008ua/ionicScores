import express, { Request, Response } from 'express';
import { appController } from '../controllers';
import passport from 'passport';

const router = express.Router();

router.post('/log-error-to-db',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  appController.logErrorToDB
);

export default router;
