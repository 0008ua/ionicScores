"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const _1 = __importDefault(require("./"));
const winston_1 = __importDefault(require("../config/winston"));
const log = (0, winston_1.default)(module);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            autoIndex: process.env.NODE_ENV !== 'production',
            // poolSize: 50, // Maintain up to 50 socket connections
            wtimeoutMS: 2500,
            // bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true, // Mongoose-specific option. If true, this connection will use createIndex() instead of ensureIndex() for automatic index builds via Model.init()
        };
        const url = _1.default.get('DB_URL');
        // connection.on('reconnected', () => {
        //   console.log('MongoDB reconnected!');
        // });
        // connection.on('error', function (err) {
        //   console.log('on error', err);
        // });
        // connection.on('close', () => {
        //   console.log('-> lost connection');
        // });
        // connection.once('open', function () {
        //   console.log('Connection to db established.');
        // });
        yield (0, mongoose_1.connect)(url, options)
            .then(() => log.info('Connected to db'))
            .catch((err) => log.error('Mongoose Error: ' + err));
    });
}
exports.default = run;
