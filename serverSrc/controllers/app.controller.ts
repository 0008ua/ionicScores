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

  console.log('error', error);
  ErrorLogModel.createErrorLog(error)
    .then(() => {
      return res.status(200).json('ok');
    })
    .catch((err) => next(err));
  // if (user && user.name && user.password) {
  //   // singnup new user
  //   user.role = 'member';
  // } else {
  //   // signup anonymus user
  //   user.role = 'guest';
  //   user.name = uuidv4();
  //   user.password = uuidv4();
  // }

  // UserModel.createUser(user)
  //   .then((user) => {
  //     req.body = user;
  //     return next();
  //   })
  //   .catch((err) => next(err));
};


export {
  logErrorToDB,
};
