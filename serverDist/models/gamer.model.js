"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamerModel = void 0;
const mongoose_1 = require("mongoose");
const GamerSchema = new mongoose_1.Schema({
    owner: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: false,
    },
    uniqueName: {
        type: String,
        required: true,
        unique: true,
    },
    color: {
        type: String,
        enum: ['red', 'green', 'blue', 'black', 'yellow'],
    },
}, {
    timestamps: true, // will add: a createdAt and a updatedAt date value.
});
GamerSchema.statics.createGamer = function (gamer) {
    return this.create(gamer);
};
exports.GamerModel = (0, mongoose_1.model)('gamers', GamerSchema);
