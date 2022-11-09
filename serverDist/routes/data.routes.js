"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/test', (req, res) => {
    const body = req.body;
    console.log('body', body);
    setTimeout(() => res.status(200).json(body), 2000);
    // return res.status(200).json(body);
    // return next(new ClientError());
});
exports.default = router;
