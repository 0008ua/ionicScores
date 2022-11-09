"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModel = void 0;
const mongoose_1 = require("mongoose");
const ScoreScheema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
        default: 0,
    },
});
const RoundScheema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    players: [ScoreScheema],
});
const GameSchema = new mongoose_1.Schema({
    owner: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    rounds: [RoundScheema],
    // finaly: ScoreScheema,
}, {
    timestamps: true, // will add: a createdAt and a updatedAt date value.
});
GameSchema.statics.createGame = function (game) {
    return this.create(game);
};
exports.GameModel = (0, mongoose_1.model)('games', GameSchema);
