import { NextFunction, Request, Response } from 'express';
import { ClientError } from '../errors';
import { GamerModel, GameModel } from '../models';
import { IGamer, IGame, IUser } from '../interfaces';
import { Types } from 'mongoose';

const getWinsToGames = (req: Request, res: Response, next: NextFunction) => {
  // const _id = req.params._id;
  const user = req.user as IUser;

  // console.log('user._id', req.user);
  GameModel.aggregate([
    {
      '$match': {
        'owner': user._id + '',
        'type': 'train',
      },
    }, {
      '$unwind': {
        'path': '$rounds',
      },
    }, {
      '$match': {
        'rounds._id': 'result',
      },
    }, {
      '$project': {
        'players': '$rounds.players',
        '_id': 0,
      },
    }, {
      '$facet': {
        'gamesCount': [
          {
            '$unwind': {
              'path': '$players',
            },
          }, {
            '$group': {
              '_id': {
                '$toObjectId': '$players._id',
              },
              'count': {
                '$sum': 1,
              },
            },
          },
        ],
        'wins': [
          {
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
          }, {
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
              'raiting.wins': '$count',
              'name': '$gamer.name',
              'color': '$gamer.color',
            },
          },
        ],
      },
    }, {
      '$unwind': {
        'path': '$wins',
      },
    }, {
      '$project': {
        'wins': 1,
        'gamesCount': {
          '$filter': {
            'input': '$gamesCount',
            'as': 'm',
            'cond': {
              '$eq': [
                '$$m._id', '$wins._id',
              ],
            },
          },
        },
      },
    }, {
      '$project': {
        'wins': 1,
        'gamesCount': {
          '$arrayElemAt': [
            '$gamesCount', 0,
          ],
        },
      },
    }, {
      '$project': {
        '_id': '$wins._id',
        'name': '$wins.name',
        'color': '$wins.color',
        'raiting.wins': '$wins.raiting.wins',
        'raiting.gamesCount': '$gamesCount.count',
        'raiting.winsToGames': {
          '$round': [
            {
              '$divide': [
                '$wins.raiting.wins', '$gamesCount.count',
              ],
            }, 2,
          ],
        },
      },
    }, {
      '$sort': {
        'raiting.winsToGames': -1,
      },
    },
  ])
    .then((game) => {
      // console.log('found game', game);
      // return next(new ClientError('oops'));
      // return setTimeout(() => next(new ClientError('oops')), 3000);
      // return setTimeout(() => res.status(200).json(game), 2000);
      return res.status(200).json(game);
    })
    .catch((err) => next(err));
};


const getWins = (req: Request, res: Response, next: NextFunction) => {
  // const _id = req.params._id;
  const user = req.user as IUser;

  // console.log('user._id', req.user);
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
        'raiting.wins': '$count',
        'name': '$gamer.name',
        'color': '$gamer.color',
      },
    }, {
      '$sort': {
        'raiting.wins': -1,
      },
    },
  ])
    .then((game) => {
      // console.log('found game', game);
      // return next(new ClientError('oops'));
      // return setTimeout(() => next(new ClientError('oops')), 3000);
      // return setTimeout(() => res.status(200).json(game), 2000);
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
  getWinsToGames,
};
