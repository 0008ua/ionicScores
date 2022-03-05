import { NextFunction, Request, Response } from 'express';
import { ClientError } from '../errors';
import { GamerModel, GameModel } from '../models';
import { IGamer, IGame, IUser } from '../interfaces';
import { Types } from 'mongoose';

const getWins = (req: Request, res: Response, next: NextFunction) => {
  // const _id = req.params._id;
  const user = req.user as IUser;

  console.log('user._id', req.user);
  GameModel.aggregate([
    {
      '$match': {
        'owner': user._id + '',
        'type': 'train',
      },
    },
    {
      '$unwind': {
        'path': '$rounds',
      },
    },
    {
      '$match': {
        'rounds._id': 'result',
      },
    }, {
      '$project': {
        'players': '$rounds.players',
        '_id': 0,
      },
    }, {
      '$project': {
        'max': {
          '$filter': {
            'input': '$players',
            'as': 'm',
            'cond': {
              '$eq': [
                '$$m.score', {
                  '$max': '$players.score',
                },
              ],
            },
          },
        },
      },
    }, {
      '$unwind': {
        'path': '$max',
      },
    }, {
      '$group': {
        '_id': {
          '$toObjectId': '$max._id',
        },
        'count': {
          '$count': {},
        },
      },
    },
    {
      '$lookup': {
        'from': 'gamers',
        'localField': '_id',
        'foreignField': '_id',
        'as': 'gamer',
      },
    }, {
      '$unwind': {
        'path': '$gamer',
      },
    }, {
      '$project': {
        'count': 1,
        'name': '$gamer.name',
        'color': '$gamer.color',
      },
    }, {
      '$sort': {
        'count': -1,
      },
    },
  ])
    .then((game) => {
      console.log('found game', game);
      return res.status(200).json(game);
    })
    .catch((err) => next(err));
};

const getWithQuery = (req: Request, res: Response, next: NextFunction) => {
  const entityPluralName = req.params.entityPluralName;
  const query = req.query;
};


export {
  getWins,
};
