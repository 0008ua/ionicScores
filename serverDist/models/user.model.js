"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const errors_1 = require("../errors");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        // default: null,
    },
    role: {
        type: String,
        required: true,
        enum: ['member', 'guest'],
        default: 'guest',
    },
}, {
    timestamps: true, // will add: a createdAt and a updatedAt date value.
});
UserSchema.statics.isNameExists = function (name) {
    return new Promise((resolve, reject) => {
        exports.UserModel.findOne({ name })
            .then((userFromDb) => {
            if (userFromDb) {
                resolve(userFromDb);
            }
            reject(new errors_1.ClientError('No such user', 401));
        })
            .catch((err) => reject(err));
    });
};
UserSchema.statics.isNameUnique = function (name) {
    return new Promise((resolve, reject) => {
        exports.UserModel.findOne({ name })
            .then((userFromDb) => {
            if (userFromDb) {
                reject(new errors_1.ClientError('Name already exist', 401));
            }
            resolve(null);
        })
            .catch((err) => reject(err));
    });
};
UserSchema.statics.isPasswordMatched = function (candidatePassword, userFromDb) {
    return new Promise((resolve, reject) => {
        bcryptjs_1.default.compare(candidatePassword, userFromDb.password)
            .then((passwordMatched) => {
            if (passwordMatched) {
                resolve(userFromDb);
            }
            else {
                reject(new errors_1.ClientError('Wrong password', 401));
            }
        })
            .catch((err) => reject(err));
    });
};
UserSchema.statics.createUser = function (user) {
    return this.isNameUnique(user.name)
        .then(() => bcryptjs_1.default.hash(user.password, 10))
        .then((hash) => {
        user.password = hash;
        return this.create(user);
    });
};
UserSchema.statics.findUserByIdAndUpdateTimestamp = function (_id) {
    return new Promise((resolve, reject) => {
        if (!_id) {
            return reject(new errors_1.ClientError('User not found', 401));
        }
        // empty update object, reason: update timestamp after using $set operator
        exports.UserModel.findOneAndUpdate({ _id }, { $set: {} }, {
            upsert: false,
            useFindAndModify: false,
            new: true,
            rawResult: false,
        })
            .then((userFromDb) => {
            if (userFromDb) {
                return resolve(userFromDb);
            }
            return reject(new errors_1.ClientError('User not found', 401));
        })
            .catch((err) => reject(err));
    });
};
exports.UserModel = (0, mongoose_1.model)('users', UserSchema);
