"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errors_1 = require("./errors");
const routes_1 = require("./routes");
const passport_1 = __importDefault(require("passport"));
const mongoose_1 = __importDefault(require("./config/mongoose"));
(0, mongoose_1.default)();
const app = (0, express_1.default)();
// view engine setup
app.set('views', path_1.default.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
// app.use(passport.session());
require("./config/passport");
app.use((req, res, next) => {
    // next(new ServerError());
    next();
});
// run().catch(err => console.log(err));
/**
 * all apis, api/404 will be handled here
 */
app.use('/api/data', routes_1.dataRouter);
app.use('/api/auth', routes_1.authRouter);
app.use('/api/store', routes_1.storeRouter);
app.use('/api/analytics', routes_1.analyticsRouter);
app.use('/api/app', routes_1.appRouter);
app.use('/api', (req, res, next) => next(new errors_1.ClientError('Wrong url', 404)));
// app.use('/api', (req: Request, res: Response, next: NextFunction) => next(new ClientError({
//   message: 'Wrong api',
//   status: '404',
// })));
/**
 * only in production, use react build folder as static
 *
 * all not-apis, 404 will be handled at client
 */
app.use('/', routes_1.router);
app.use('*', function (req, res) {
    res.redirect('/');
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(new errors_1.ServerError());
});
// error handler
app.use(errors_1.errorHandler);
exports.default = app;
