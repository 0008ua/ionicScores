"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.getWithQuery = exports.getById = exports.getAll = exports.remove = exports.add = void 0;
const errors_1 = require("../errors");
const models_1 = require("../models");
const normalizeGamer = (gamer) => {
    if (Array.isArray(gamer)) {
        return gamer.map((gamer) => ({
            _id: gamer._id,
            name: gamer.name,
            color: gamer.color,
            owner: gamer.owner,
        }));
    }
    return {
        _id: gamer._id,
        name: gamer.name,
        color: gamer.color,
        owner: gamer.owner,
    };
};
const add = (req, res, next) => {
    const entityName = req.params.entityName;
    const entity = req.body;
    const user = req.user;
    switch (entityName) {
        case 'gamer': {
            const gamer = entity;
            gamer.owner = user._id;
            gamer.uniqueName = user._id + gamer.name;
            models_1.GamerModel.createGamer(gamer)
                .then((gamer) => {
                return res.status(200).json(normalizeGamer(gamer));
            })
                .catch((err) => next(err));
            break;
        }
        case 'game': {
            const game = entity;
            game.owner = user._id;
            models_1.GameModel.createGame(game)
                .then((game) => {
                return res.status(200).json(game);
            })
                .catch((err) => next(err));
            break;
        }
        default:
            return next(new errors_1.ClientError('Wrong entity', 403));
    }
};
exports.add = add;
const remove = (req, res, next) => {
    const entityName = req.params.entityName;
    const _id = req.params._id;
    // switch (entityName) {
    //   case 'operator':
    //     UserModel.deleteOne({ _id })
    //       .then((result) => checkDbResDeleteCount(result))
    //       .then((_) => {
    //         return CompanyModel.updateOne(
    //           { _id: company_id },
    //           { $pull: { users: _id } },
    //           { multi: true },
    //         );
    //       })
    //       .then((result) => checkDbResNModified(result))
    //       .then((_) => {
    //         return res.status(200).json(_id);
    //       })
    //       .catch((err) => next(err));
    //     break;
    //   case 'room':
    //     BookingModel.deleteMany({ room_id: _id })
    //       .then((_) => {
    //         console.log('delete', _);
    //         return CompanyModel.updateOne(
    //           { _id: company_id },
    //           { $pull: { 'rooms': { _id } } },
    //           { upsert: false },
    //         );
    //       })
    //       .then((_) => res.status(200).json(_id))
    //       .catch((err) => next(err));
    //     break;
    //   default:
    //     return next(new ClientError({ message: 'Wrong entity', status: 403 }));
    // }
};
exports.remove = remove;
const getAll = (req, res, next) => {
    const user = req.user;
    const entityPluralName = req.params.entityPluralName;
    switch (entityPluralName) {
        case 'gamers': {
            models_1.GamerModel.find({ owner: user._id })
                .then((gamers) => {
                return res.status(200).json(normalizeGamer(gamers));
            })
                .catch((err) => next(err));
            break;
        }
        case 'games': {
            models_1.GameModel.find({ owner: user._id, type: entityPluralName })
                .then((games) => res.status(200).json(games))
                .catch((err) => next(err));
            break;
        }
        //     UserModel.find({ _id: { $in: company.users } }, { password: 0 })
        //       .then((users) => res.status(200).json(normalizeUserObject(users)))
        //       .catch((err) => next(err));
        //     break;
        //   case 'rooms':
        //     CompanyModel.find({ _id: company._id }, { rooms: 1, _id: 0 })
        //       .then((result) => res.status(200).json(result[0].rooms))
        //       .catch((err) => next(err));
        default:
            return next(new errors_1.ClientError('Wrong entity', 403));
    }
};
exports.getAll = getAll;
const getById = (req, res, next) => {
    const entityName = req.params.entityName;
    const _id = req.params._id;
    const user = req.user;
    switch (entityName) {
        case 'gamer': {
            models_1.GamerModel.find({ _id, owner: user._id })
                .then((gamer) => {
                return res.status(200).json(normalizeGamer(gamer));
            })
                .catch((err) => next(err));
            break;
        }
        case 'game': {
            models_1.GameModel.find({ _id, owner: user._id })
                .then((game) => {
                return res.status(200).json(game);
            })
                .catch((err) => next(err));
            break;
        }
    }
    res.status(200).json({ _id: '12345', name: 'john' });
};
exports.getById = getById;
const getWithQuery = (req, res, next) => {
    const entityPluralName = req.params.entityPluralName;
    const query = req.query;
};
exports.getWithQuery = getWithQuery;
const update = (req, res, next) => {
    const entityName = req.params.entityName;
    const _id = req.params._id;
    const update = req.body;
    const user = req.user;
    switch (entityName) {
        case 'gamer':
            models_1.GamerModel.findOneAndUpdate({ _id }, { $set: update }, {
                upsert: true,
                useFindAndModify: true,
                new: true,
                rawResult: false, // return mongoDB object instead of doc (old version of doc included)
            })
                .then((updatedGamer) => {
                return updatedGamer;
            })
                .then((updatedGamer) => normalizeGamer(updatedGamer))
                .then((normalizedGamer) => res.status(200).json(normalizedGamer))
                .catch((err) => next(err));
            break;
        case 'game':
            // self update and admin update
            models_1.GameModel.findOneAndUpdate({ _id }, { $set: update }, {
                upsert: true,
                useFindAndModify: true,
                new: true,
                rawResult: false, // return mongoDB object instead of doc (old version of doc included)
            })
                .then((updatedGame) => {
                return updatedGame;
            })
                .then((updatedGame) => res.status(200).json(updatedGame))
                .catch((err) => next(err));
            break;
        //   case 'room':
        //     const updateQuery = {};
        //     for (const key in update) {
        //       if (update.hasOwnProperty(key)) {
        //         updateQuery['rooms.$.' + key] = update[key];
        //       }
        //     }
        //     // partial update object in array at position $
        //     CompanyModel.updateOne(
        //       { '_id': company_id, 'rooms._id': _id },
        //       { $set: updateQuery },
        //       {
        //         upsert: false,
        //         useFindAndModify: false,
        //         new: true,
        //         rawResult: false,
        //       },
        //     )
        //       .then((_) => res.status(200).json())
        //       .catch((err) => next(err));
        //     break;
        //   default:
        //     return next(new ClientError({ message: 'Wrong entity', status: 403 }));
    }
};
exports.update = update;
