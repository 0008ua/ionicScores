"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = __importStar(require("passport-jwt"));
const models_1 = require("../models");
const _1 = __importDefault(require("./"));
const winston_1 = __importDefault(require("../config/winston"));
const log = (0, winston_1.default)(module);
const LocalStrategy = passport_local_1.default.Strategy;
const JwtStrategy = passport_jwt_1.default.Strategy;
passport_1.default.use('local', new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password',
}, (name, password, done) => {
    const userCandidate = {
        name,
        password,
    };
    models_1.UserModel.isNameExists(userCandidate.name)
        // if password doesn't match then throw error with code 'wrongCredentials' here
        .then((userFromDb) => models_1.UserModel.isPasswordMatched(userCandidate.password, userFromDb)) // userFromDb._doc.password))
        .then((userFromDb) => done(null, userFromDb))
        .catch((err) => done(err, false));
}));
passport_1.default.use('localAnonymous', new LocalStrategy({
    usernameField: 'name',
    passwordField: 'name',
}, (name, password, done) => {
    models_1.UserModel.isNameExists(name)
        .then((userFromDb) => {
        done(null, userFromDb);
    })
        .catch((err) => done(err, false));
}));
const jwtOptions = {};
jwtOptions.jwtFromRequest = passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = _1.default.get('JWT_SECRET');
passport_1.default.use('jwt', new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    // на основі _id (витягнутого з токена) робить пошук
    // в базі, чи є такий юзер, і ф-я done повертає відповідь
    models_1.UserModel.findUserByIdAndUpdateTimestamp(jwtPayload._id)
        .then((user) => {
        if (user) {
            done(null, user);
        }
        else {
            done(null, false);
        }
    })
        .catch((err) => {
        done(err, false);
    });
}));
// name user after creation or change credentials
// without password
passport_1.default.use('localWithoutPassword', new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password',
}, (name, password, done) => {
    models_1.UserModel.isNameExists(name)
        .then((userFromDb) => {
        done(null, userFromDb);
    })
        .catch((err) => done(err, false));
}));
