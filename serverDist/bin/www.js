#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const debug_1 = __importDefault(require("debug"));
(0, debug_1.default)('server:server');
const config_1 = __importDefault(require("../config"));
const winston_1 = __importDefault(require("../config/winston"));
const log = (0, winston_1.default)(module);
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
/*
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config_1.default.get('port'));
app_1.default.set('port', port);
/*
 * Create HTTP or HTTPS server.
 */
let server;
if (process.env.NODE_ENV === 'development') {
    const httpsOptions = {
        key: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', '..', 'security', 'cert.key')),
        cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', '..', 'security', 'cert.pem')),
    };
    server = https_1.default.createServer(httpsOptions, app_1.default);
}
else {
    server = http_1.default.createServer(app_1.default);
}
/*
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/*
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    (0, debug_1.default)('Listening on ' + bind);
    log.verbose(`Server listening on ${util_1.default.format(bind)}`);
}
