"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers api
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// -----api end point--------
// -----root api endpoint------
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'SmartMeal is running successfully 🏃🏽‍♂️➡️',
    });
});
app.use("*", (req, res) => {
    res.status(404).json({
        status: false,
        message: 'Route not found'
    });
});
exports.default = app;
