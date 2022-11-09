import { NextFunction, Request, Response } from 'express';
import { ErrorLogModel } from '../models/errorLog.model';
import { IUser } from '../interfaces';
import jwt from 'jsonwebtoken';
import config from '../config';
import { v4 as uuidv4 } from 'uuid';

const logErrorToDB = (req: Request, res: Response, next: NextFunction) => {
  const {message} = req.body;
  const user = req.user as IUser;
  const error = {
    message,
    owner: user._id?.toString() as string,
  };
  console.log('error Logger', error);
  ErrorLogModel.createErrorLog(error)
    .then(() => res.status(200).json('error logged successfully'))
    .catch((err) => next(err));
};


export {
  logErrorToDB,
};
