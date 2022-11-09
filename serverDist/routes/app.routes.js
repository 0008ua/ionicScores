"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.post('/log-error-to-db', passport_1.default.authenticate('jwt', { session: false, failWithError: true }), controllers_1.appController.logErrorToDB);
exports.default = router;
