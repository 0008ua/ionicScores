"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, printf, json, colorize, splat } = winston_1.format;
const { Console, File } = winston_1.transports;
const util_1 = __importDefault(require("util"));
function log(module) {
    const path = module.filename;
    // custom format for console
    const consoleFormat = printf(({ level, message, label }) => {
        return `${level}: [${label}] ${util_1.default.format(message)}`;
    });
    // custom format for file output
    const fileFormat = printf(({ level, message, label, timestamp }) => {
        return `${level}: [${timestamp} - ${label}] ${util_1.default.format(message)}`;
    });
    const logger = (0, winston_1.createLogger)({
        level: 'debug',
    });
    const consoleLogger = new Console({
        format: combine(colorize(), label({ label: path }), json(), splat(), consoleFormat),
    });
    const fileLogger = new File({
        filename: 'logger.log',
        format: combine(timestamp(), json(), label({ label: path }), fileFormat),
    });
    const errorLogger = new File({
        filename: 'error.log',
        level: 'error',
        format: combine(timestamp(), json(), label({ label: path }), fileFormat),
    });
    if (process.env.NODE_ENV !== 'production') {
        logger.add(consoleLogger);
    }
    else {
        logger.add(errorLogger);
        logger.add(fileLogger);
    }
    return logger;
}
exports.default = log;
