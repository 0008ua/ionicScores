"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_model_1 = require("../models/user.model");
const passport_1 = __importDefault(require("passport"));
const winston_1 = __importDefault(require("../config/winston"));
const log = (0, winston_1.default)(module);
const controllers_1 = require("../controllers");
router.get('/protected', passport_1.default.authenticate('jwt', { session: false, failWithError: true }), (req, res, next) => {
    const user = req.user;
    console.log('_id', user._id);
    user_model_1.UserModel.findUserByIdAndUpdateTimestamp(user._id).then((result) => {
        console.log('find result', result);
    });
    const token = req.headers['authorization'];
    // console.log('token', token);
    return res.status(200).json('reached protected route');
});
// name with username and password
router.post('/signin', (req, res, next) => {
    // console.log('granted');
    console.log('req.body', req.body);
    return next();
    // return res.status(200).json('grant');
    // return res.status(200).json(body);
    // return next(new ClientError());
}, passport_1.default.authenticate('local', { session: false }), controllers_1.authController.createJwtAndResponse);
// bad token or new guest user without token
// or new user is registring
router.post('/signup', (req, res, next) => {
    // console.log('granted');
    console.log('req.body', req.body);
    return next();
    // return res.status(200).json('grant');
    // return res.status(200).json(body);
    // return next(new ClientError());
}, controllers_1.authController.signup, passport_1.default.authenticate('localWithoutPassword', { session: false }), controllers_1.authController.createJwtAndResponse);
router.get('/authentication', (req, res, next) => {
    // console.log('granted');
    return res.status(200).json('grant');
    // return res.status(200).json(body);
    // return next(new ClientError());
});
exports.default = router;
