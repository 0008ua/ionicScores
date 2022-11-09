"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorLogModel = void 0;
const mongoose_1 = require("mongoose");
const ErrorLogSchema = new mongoose_1.Schema({
    message: {
        type: String,
        required: true,
        default: 'Unknown Error',
    },
    owner: {
        type: String,
        required: true,
        // default: null,
    },
}, {
    timestamps: true,
});
ErrorLogSchema.statics.createErrorLog = function (error) {
    return this.create(error);
};
exports.ErrorLogModel = (0, mongoose_1.model)('errorLogs', ErrorLogSchema);
