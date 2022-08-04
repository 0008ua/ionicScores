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
              'count': 1,
              'name': '$gamer.name',
              'color': '$gamer.color',
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
          },
        ],
      },
    }, {
      '$unwind': {
        'path': '$gamesCount',
      },
    }, {
      '$project': {
        'gamesCount': 1,
        'wins': {
          '$filter': {
            'input': '$wins',
            'as': 'm',
            'cond': {
              '$eq': [
                '$$m._id', '$gamesCount._id',
              ],
            },
          },
        },
      },
    }, {
      '$project': {
        'wins': {
          '$ifNull': [
            {
              '$arrayElemAt': [
                '$wins', 0,
              ],
            }, {
              'count': 0,
            },
          ],
        },
        'gamesCount': 1,
      },
    }, {
      '$project': {
        '_id': '$gamesCount._id',
        'name': '$gamesCount.name',
        'color': '$gamesCount.color',
        'rating.wins': '$wins.count',
        'rating.gamesCount': '$gamesCount.count',
        'rating.winsToGames': {
          '$round': [
            {
              '$divide': [
                '$wins.count', '$gamesCount.count',
              ],
            }, 2,
          ],
        },
      },
    }, {
      '$sort': {
        'rating.winsToGames': -1,
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
        'rating.wins': '$count',
        'name': '$gamer.name',
        'color': '$gamer.color',
      },
    }, {
      '$sort': {
        'rating.wins': -1,
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


const getRating = (req: Request, res: Response, next: NextFunction) => {
  // const _id = req.params._id;
  const user = req.user as IUser;

  // console.log('user._id', req.user);
  GameModel.aggregate([
    {
      '$match': {
        'owner': user._id + '',
        'type': 'rummy',
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
      '$unwind': {
        'path': '$players',
      },
    }, {
      '$group': {
        '_id': {
          '$toObjectId': '$players._id',
        },
        'totalGames': {
          '$count': {},
        },
        'wins': {
          '$sum': {
            '$cond': [
              {
                '$lt': [
                  '$players.score', 0,
                ],
              }, 1, 0,
            ],
          },
        },
        'sum': {
          '$sum': '$players.score',
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
        'rating.wins': '$wins',
        'rating.totalGames': '$totalGames',
        'rating.scores': '$sum',
        'name': '$gamer.name',
        'color': '$gamer.color',
      },
    },
    {
      '$sort': {
        'rating.scores': -1,
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
  getRating,
};
