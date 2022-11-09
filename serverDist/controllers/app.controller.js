"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logErrorToDB = void 0;
const errorLog_model_1 = require("../models/errorLog.model");
const logErrorToDB = (req, res, next) => {
    var _a;
    const { message } = req.body;
    const user = req.user;
    const error = {
        message,
        owner: (_a = user._id) === null || _a === void 0 ? void 0 : _a.toString(),
    };
    console.log('error Logger', error);
    errorLog_model_1.ErrorLogModel.createErrorLog(error)
        .then(() => res.status(200).json('error logged successfully'))
        .catch((err) => next(err));
};
exports.logErrorToDB = logErrorToDB;
