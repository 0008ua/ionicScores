"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJwtAndResponse = exports.signup = void 0;
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const uuid_1 = require("uuid");
const signup = (req, res, next) => {
    const user = req.body;
    if (user && user.name && user.password) {
        // singnup new user
        user.role = 'member';
    }
    else {
        // signup anonymus user
        user.role = 'guest';
        user.name = (0, uuid_1.v4)();
        user.password = (0, uuid_1.v4)();
    }
    user_model_1.UserModel.createUser(user)
        .then((user) => {
        req.body = user;
        return next();
    })
        .catch((err) => next(err));
};
exports.signup = signup;
const createJwtAndResponse = (req, res, next) => {
    // console.log('jwt', config.get('JWT_SECRET'))
    const { name, role, _id } = req.user;
    const user = { name, role, _id };
    const token = createJwtHelper('JWT ', user, config_1.default.get('JWT_SECRET'));
    res.status(200).json(token);
};
exports.createJwtAndResponse = createJwtAndResponse;
const createJwtHelper = (prefix, sub, secret, exp) => {
    const date = Math.floor(Date.now() / 1000); // in seconds
    const subject = Object.assign(Object.assign({}, sub), { iat: date });
    if (exp) {
        subject.exp = date + exp; // seconds
    }
    return prefix + jsonwebtoken_1.default.sign(subject, secret);
};
