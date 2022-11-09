"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nconf_1 = __importDefault(require("nconf"));
const path_1 = __importDefault(require("path"));
nconf_1.default.argv() // прочитати конфігурацію з командної стрічки
    .env() // прочитати конфігурацію з змінних оточення
    .file({ file: path_1.default.join(__dirname, 'config.json') }); // прочитати конфігурацію з файлу
exports.default = nconf_1.default;
