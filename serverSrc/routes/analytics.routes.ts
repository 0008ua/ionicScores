// const express = require('express');
import express, { Request, Response } from 'express';
import { ClientError, ServerError } from '../errors';
import { analyticsController } from '../controllers';
import passport from 'passport';

const router = express.Router();

router.get('/get-wins',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  analyticsController.getWins
);

router.get('/get-wins-to-games',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  analyticsController.getWinsToGames
);

router.get('/get-rating',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  analyticsController.getRating
);

export default router;
