// const express = require('express');
import express, { Request, Response } from 'express';
import { ClientError, ServerError } from '../errors';
import { analyticsController } from '../controllers';
import passport from 'passport';

const router = express.Router();

router.get('/get-wins',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  analyticsController.getWins
  //  (req: Request, res: Response) => {
  //   res.status(200).json('rating response');
  //   // return res.status(200).json(body);
  //   // return next(new ClientError());
  // }
);

export default router;
