"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ServerError = exports.ClientError = exports.CustomError = void 0;
const winston_1 = __importDefault(require("../config/winston"));
const log = (0, winston_1.default)(module);
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Object.defineProperty(this, 'message', { enumerable: true });
    }
}
exports.CustomError = CustomError;
class ClientError extends CustomError {
    constructor(message = 'Bad request', status = 400) {
        super(message);
        this.status = status;
    }
}
exports.ClientError = ClientError;
class ServerError extends CustomError {
    constructor(message = 'Internal server error', status = 500) {
        super(message);
        this.status = status;
    }
}
exports.ServerError = ServerError;
const errorHandler = (err, req, res, next) => {
    // defined errors return to client
    console.log('error Handler', err);
    // log.error(err);
    if (err.name === 'MongoServerError' && err.code === 11000) {
        const dupError = new ClientError('Already exists', 422);
        return res.status(dupError.status).json(dupError);
    }
    if (err instanceof ClientError || err instanceof ServerError) {
        return res.status(err.status).json(err);
    }
    if (err.name === 'AuthenticationError') {
        return res.send(JSON.stringify(err));
    }
    // all other errors set as Server error
    const otherError = new ServerError(err.message, 500);
    return res.status(otherError.status).json(otherError);
    // // all other errors
    // // set locals, only providing error in development
    // res.locals.comment = 'Something went wrong :(';
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    // // // render the error page
    // res.status(err.status || 500);
    // res.render('error');
};
exports.errorHandler = errorHandler;
